import path from 'path'
import fs from 'fs'
import { kebabToCamelCase, indent } from './utils.js'

const eventsDir = path.join('src/events')
let eventTypes = []

// Initialize generated file with required imports
let s = ''
s += 'import { PutEventsCommand } from "@aws-sdk/client-eventbridge"\n'
s += 'import { randomUUID } from "crypto"\n'
s += 'import { z } from "zod"\n\n'
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

function generateZodSchema(attributes, nest = 1) {
  const schemaFields = []

  attributes.forEach((attr) => {
    const propName = attr.name
    let zodType = ''

    if (attr.attributes !== undefined) {
      // Nested object
      zodType = `z.object({\n${generateZodSchema(
        attr.attributes,
        nest + 1
      )}\n${indent(nest)}})`
    } else if (attr.enum !== undefined) {
      // Enum
      const isStringEnum = attr.enum.every((e) => typeof e === 'string')
      if (isStringEnum) {
        const enumValues = attr.enum.map((e) => `"${e}"`).join(', ')
        zodType = `z.enum([${enumValues}])`
      } else {
        // Number enum or mixed - use union of literals
        const literalValues = attr.enum
          .map((e) => {
            if (typeof e === 'string') return `z.literal("${e}")`
            return `z.literal(${e})`
          })
          .join(', ')
        zodType = `z.union([${literalValues}])`
      }
    } else if (attr.oneOf !== undefined) {
      // Union (oneOf)
      const unionTypes = attr.oneOf
        .map((item) => {
          if (typeof item === 'string') {
            // Primitive type
            if (item === 'string') return 'z.string()'
            if (item === 'number') return 'z.number()'
            if (item === 'boolean') return 'z.boolean()'
            return `z.${item}()`
          } else if (item.attributes !== undefined) {
            // Object type
            return `z.object({\n${generateZodSchema(
              item.attributes,
              nest + 1
            )}\n${indent(nest)}})`
          }
          return 'z.unknown()'
        })
        .join(', ')
      zodType = `z.union([${unionTypes}])`
    } else if (attr.arrayOf !== undefined) {
      // Array
      if (typeof attr.arrayOf === 'string') {
        // Array of primitives
        if (attr.arrayOf === 'string') zodType = 'z.array(z.string())'
        else if (attr.arrayOf === 'number') zodType = 'z.array(z.number())'
        else if (attr.arrayOf === 'boolean') zodType = 'z.array(z.boolean())'
        else zodType = `z.array(z.${attr.arrayOf}())`
      } else if (attr.arrayOf.attributes !== undefined) {
        // Array of objects
        zodType = `z.array(z.object({\n${generateZodSchema(
          attr.arrayOf.attributes,
          nest + 1
        )}\n${indent(nest)}}))`
      } else if (Array.isArray(attr.arrayOf)) {
        // Array of union types
        const unionTypes = attr.arrayOf
          .map((item) => {
            if (item === 'string') return 'z.string()'
            if (item === 'number') return 'z.number()'
            if (item === 'boolean') return 'z.boolean()'
            return `z.${item}()`
          })
          .join(', ')
        zodType = `z.array(z.union([${unionTypes}]))`
      }
    } else if (typeof attr.type === 'string') {
      // Primitive type
      if (attr.type === 'string') zodType = 'z.string()'
      else if (attr.type === 'number') zodType = 'z.number()'
      else if (attr.type === 'boolean') zodType = 'z.boolean()'
      else zodType = `z.${attr.type}()`
    }

    // Make optional if not required
    if (!attr.required && zodType) {
      zodType = `${zodType}.optional()`
    }

    if (zodType) {
      schemaFields.push(`${indent(nest)}${propName}: ${zodType}`)
    }
  })

  return schemaFields.join(',\n')
}

function createEvent(jsonType, camelNameEvent) {
  let str = `export namespace ${camelNameEvent} {\n`

  // Generate Zod schema
  str += `  const schema = z.object({\n`
  str += generateZodSchema(jsonType.attributes, 2)
  str += `\n  })\n\n`

  // Type inference from schema
  str += `  export type ${camelNameEvent}Data = z.infer<typeof schema>\n\n`

  str += `  export const buildData = (data: unknown) => {\n`
  str += `    const sanitized = schema.parse(data)\n`
  str += `    return {
      type: "${jsonType.name}",
      data: sanitized,
      timestamp: Math.floor(Date.now() / 1000),
      source: "custom",
      id: randomUUID(),
    }\n`
  str += `  }\n\n`

  // Build AWS EventBridge PutEvents params using the existing envelope
  str += `  export const build = (data: unknown) => {\n`
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
  str += `  }\n\n`

  str += `  export const type = "${jsonType.name}"\n`

  str += `}\n`
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
