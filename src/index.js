import path from 'path'
import fs from 'fs'
import { kebabToCamelCase, indent } from './utils.js'

const eventsDir = path.join('src/events')
let eventTypes = []

// Initialize generated file with required imports
let s = ''
s += 'import { PutEventsCommand } from "@aws-sdk/client-eventbridge"\n'
s += 'import { randomUUID } from "crypto"\n\n'
fs.writeFileSync('generated/index.ts', s, { flag: 'w' })

fs.readdirSync(eventsDir)
  .filter((file) => file.endsWith('.json'))
  .map((file) => generate(file))

function generate(eventFileName) {
  const json = fs.readFileSync(path.join(eventsDir, eventFileName), 'utf8')
  const jsonType = JSON.parse(json)
  const camelNameEvent = kebabToCamelCase(jsonType.name) + 'Event'
  eventTypes.push({ ...jsonType, camelName: kebabToCamelCase(jsonType.name) })

  let str = ''
  // str += `export const ${camelNameEvent}DataJson = \`${JSON.stringify(jsonType)}\`\n`

  str += '/**\n'
  str += ` * ${jsonType.description}\n`
  str += ' */\n'
  str += `export type ${camelNameEvent}Data = {\n`
  str += jsonType.attributes
    .map((atr) => generateAttributeDefinition(atr, 1))
    .join('\n')
  str += `\n}\n`

  str += `export type ${camelNameEvent}Envelope = {\n`
  str += `  type: "${jsonType.name}",\n`
  str += `  data: ${camelNameEvent}Data,\n`
  str += `  time: number,\n`
  str += `  source: string,\n`
  str += `  account: string,\n`
  str += `  version: string,\n`
  str += `  id: string,\n`
  str += `}\n`

  str += createEvent(jsonType, camelNameEvent)

  str += '\n\n'

  fs.writeFileSync('generated/index.ts', str, { flag: 'a+' })
}

function generateAttributeDefinition(attribute, nest, isOneOf = false) {
  let str = isOneOf ? '' : `${indent(nest)}/** ${attribute.description} */\n`
  str += isOneOf
    ? ''
    : `${indent(nest)}${attribute.name}${attribute.required ? '' : '?'}: `

  if (attribute.attributes !== undefined) {
    str +=
      '{\n' +
      attribute.attributes
        .map((atr) => generateAttributeDefinition(atr, nest + 1))
        .join('\n') +
      '\n' +
      indent(nest) +
      '}'
  } else if (attribute.enum !== undefined) {
    str += generateEnumDefinition(attribute)
  } else if (attribute.oneOf !== undefined) {
    str += generateOneOfDefinition(attribute, nest)
  } else if (attribute.arrayOf !== undefined) {
    str += generateArrayOfDefinition(attribute, nest)
  } else if (typeof attribute.type === 'string') {
    str += attribute.type
  }
  // Append semicolon to terminate property lines, but not inside union members
  if (!isOneOf) {
    str += ';'
  }
  return str
}

function generateOneOfDefinition(attribute, nest) {
  let str = ''
  str += attribute.oneOf
    .map((atr) => {
      if (typeof atr === 'string') {
        return atr
      }
      return generateAttributeDefinition(atr, nest + 1, true)
    })
    .join(' | ')
  str += `\n${indent(nest)}`
  return str
}

function generateArrayOfDefinition(attribute, nest) {
  if (typeof attribute.arrayOf === 'string') {
    return attribute.arrayOf + '[]'
  } else if (attribute.arrayOf.attributes !== undefined) {
    let str = '{'
    str += attribute.arrayOf.attributes
      .map((atr) => generateAttributeDefinition(atr, nest + 1))
      .join('\n')
    str += `\n${indent(nest)}}[]`
    return str
  }
  return `(${attribute.arrayOf.join(' | ')})[]`
}

function generateEnumDefinition(attribute) {
  return attribute.enum
    .map((atr) => (typeof atr === 'string' ? `"${atr}"` : atr))
    .join(' | ')
}

function generateRequiredValidation(
  attributes,
  nest = 1,
  dataPath = 'data',
  missingPath = ''
) {
  let code = ''
  const missing = missingPath ? `${missingPath}.` : ''

  attributes.forEach((attr) => {
    const propName = attr.name
    const currentDataPath = `${dataPath}.${propName}`
    const currentMissingPath = `${missing}${propName}`

    if (attr.required) {
      if (attr.attributes !== undefined) {
        // Nested object - validate required properties recursively
        code += `${indent(nest)}if (!${currentDataPath}) {\n`
        code += `${indent(
          nest + 1
        )}throw new Error("Missing required property: ${currentMissingPath}")\n`
        code += `${indent(nest)}}\n`
        code += generateRequiredValidation(
          attr.attributes,
          nest,
          currentDataPath,
          currentMissingPath
        )
      } else if (attr.arrayOf !== undefined) {
        // Array - validate it exists and is an array
        code += `${indent(
          nest
        )}if (!${currentDataPath} || !Array.isArray(${currentDataPath})) {\n`
        code += `${indent(
          nest + 1
        )}throw new Error("Missing required property: ${currentMissingPath} (must be an array)")\n`
        code += `${indent(nest)}}\n`
        if (attr.arrayOf.attributes !== undefined) {
          // Array of objects - validate each item
          code += `${indent(
            nest
          )}${currentDataPath}.forEach((item: any, index: number) => {\n`
          code += generateRequiredValidation(
            attr.arrayOf.attributes,
            nest + 1,
            'item',
            `${currentMissingPath}[index]`
          )
          code += `${indent(nest)}})\n`
        }
      } else {
        // Simple required property
        code += `${indent(nest)}if (!${currentDataPath}) {\n`
        code += `${indent(
          nest + 1
        )}throw new Error("Missing required property: ${currentMissingPath}")\n`
        code += `${indent(nest)}}\n`
      }
    } else if (attr.attributes !== undefined) {
      // Optional nested object - validate recursively if it exists
      code += `${indent(nest)}if (${currentDataPath}) {\n`
      code += generateRequiredValidation(
        attr.attributes,
        nest + 1,
        currentDataPath,
        currentMissingPath
      )
      code += `${indent(nest)}}\n`
    } else if (
      attr.arrayOf !== undefined &&
      attr.arrayOf.attributes !== undefined
    ) {
      // Optional array of objects - validate items if array exists
      code += `${indent(
        nest
      )}if (${currentDataPath} && Array.isArray(${currentDataPath})) {\n`
      code += `${indent(
        nest + 1
      )}${currentDataPath}.forEach((item: any, index: number) => {\n`
      code += generateRequiredValidation(
        attr.arrayOf.attributes,
        nest + 2,
        'item',
        `${currentMissingPath}[index]`
      )
      code += `${indent(nest + 1)}})\n`
      code += `${indent(nest)}}\n`
    }
  })

  return code
}

function generateSanitizeCode(
  attributes,
  nest = 1,
  dataPath = 'data',
  resultPath = 'result'
) {
  let code = ''

  attributes.forEach((attr) => {
    const propName = attr.name
    const currentDataPath = `${dataPath}.${propName}`

    if (attr.attributes !== undefined) {
      // Nested object - recursive sanitization
      if (attr.required) {
        code += `${indent(nest)}${resultPath}.${propName} = {}\n`
        code += generateSanitizeCode(
          attr.attributes,
          nest,
          currentDataPath,
          `${resultPath}.${propName}`
        )
      } else {
        // Optional nested object - only include if it exists
        code += `${indent(nest)}if (${currentDataPath}) {\n`
        code += `${indent(nest + 1)}${resultPath}.${propName} = {}\n`
        code += generateSanitizeCode(
          attr.attributes,
          nest + 1,
          currentDataPath,
          `${resultPath}.${propName}`
        )
        code += `${indent(nest)}}\n`
      }
    } else if (attr.arrayOf !== undefined) {
      if (attr.required) {
        // Required array - assign directly
        if (typeof attr.arrayOf === 'string') {
          code += `${indent(
            nest
          )}${resultPath}.${propName} = ${currentDataPath}\n`
        } else if (attr.arrayOf.attributes !== undefined) {
          code += `${indent(
            nest
          )}${resultPath}.${propName} = ${currentDataPath}.map((item: any) => {\n`
          code += `${indent(nest + 1)}const sanitized: any = {}\n`
          code += generateSanitizeCode(
            attr.arrayOf.attributes,
            nest + 1,
            'item',
            'sanitized'
          )
          code += `${indent(nest + 1)}return sanitized\n`
          code += `${indent(nest)}})\n`
        } else if (Array.isArray(attr.arrayOf)) {
          code += `${indent(
            nest
          )}${resultPath}.${propName} = ${currentDataPath}\n`
        }
      } else {
        // Optional array - only include if it exists
        code += `${indent(
          nest
        )}if (${currentDataPath} && Array.isArray(${currentDataPath})) {\n`
        if (typeof attr.arrayOf === 'string') {
          code += `${indent(
            nest + 1
          )}${resultPath}.${propName} = ${currentDataPath}\n`
        } else if (attr.arrayOf.attributes !== undefined) {
          code += `${indent(
            nest + 1
          )}${resultPath}.${propName} = ${currentDataPath}.map((item: any) => {\n`
          code += `${indent(nest + 2)}const sanitized: any = {}\n`
          code += generateSanitizeCode(
            attr.arrayOf.attributes,
            nest + 2,
            'item',
            'sanitized'
          )
          code += `${indent(nest + 2)}return sanitized\n`
          code += `${indent(nest + 1)}})\n`
        } else if (Array.isArray(attr.arrayOf)) {
          code += `${indent(
            nest + 1
          )}${resultPath}.${propName} = ${currentDataPath}\n`
        }
        code += `${indent(nest)}}\n`
      }
    } else {
      // Simple property
      if (attr.required) {
        // Required property - assign directly
        code += `${indent(
          nest
        )}${resultPath}.${propName} = ${currentDataPath}\n`
      } else {
        // Optional property - only include if it exists
        code += `${indent(nest)}if (${currentDataPath}) {\n`
        code += `${indent(
          nest + 1
        )}${resultPath}.${propName} = ${currentDataPath}\n`
        code += `${indent(nest)}}\n`
      }
    }
  })

  return code
}

function createEvent(jsonType, camelNameEvent) {
  let str = `export namespace ${camelNameEvent} {\n`

  // Add sanitize function
  str += `  const sanitize = (data: any): ${camelNameEvent}Data => {\n`
  str += `    if (!data || typeof data !== 'object') {\n`
  str += `      throw new Error("Data must be an object")\n`
  str += `    }\n`
  str += `    // Validate required properties\n`
  str += generateRequiredValidation(jsonType.attributes, 2)
  str += `    // Create sanitized object with only schema properties\n`
  str += `    const result: any = {}\n`
  str += generateSanitizeCode(jsonType.attributes, 2)
  str += `    return result as ${camelNameEvent}Data\n`
  str += `  }\n\n`

  str += `  export const buildData = (data: any) => {\n`
  str += `    const sanitized = sanitize(data)\n`
  str += `    return {
      type: "${jsonType.name}",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }\n`
  str += `  }\n`

  // Build AWS EventBridge PutEvents params using the existing envelope
  str += `  export const build = (data: any) => {\n`
  str += `    if (!process.env.EVENT_BUS_NAME) throw new Error("process.env.EVENT_BUS_NAME must be provided")
      const envelope = ${camelNameEvent}.buildData(data)
      return new PutEventsCommand({
        Entries: [
          {
            Detail: JSON.stringify(envelope),
            DetailType: "${jsonType.name}",
            EventBusName: process.env.EVENT_BUS_NAME!,
            Source: "custom",
          },
        ],
      })\n`
  str += `  }\n`

  str += `  export const type = "${jsonType.name}"\n`

  str += `} \n`
  return str
}

// export namespace events {
//   export function build(data){
//     if(!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
//     return {
//       type: jsonType.name,
//       data: data,
//       timestamp: Math.floor(Date.now() / 1000),
//       source: process.env.SERVICE,
//     }
//   }
// }

const def = `\nexport const DEFINITIONS = ${JSON.stringify(eventTypes)} \n`
fs.writeFileSync('generated/index.ts', def, { flag: 'a+' })
