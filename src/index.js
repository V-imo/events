import path from "path"
import fs from "fs"
import { kebabToCamelCase, indent } from "./utils.js"

const eventsDir = path.join("src/events")
let eventTypes = []

fs.writeFileSync("generated/index.ts", "", { flag: 'w' })

fs.readdirSync(eventsDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => generate(file))

function generate(eventFileName) {
  const json = fs.readFileSync(path.join(eventsDir, eventFileName), "utf8")
  const jsonType = JSON.parse(json)
  const camelNameEvent = kebabToCamelCase(jsonType.name) + "Event"
  eventTypes.push({ ...jsonType, camelName: kebabToCamelCase(jsonType.name) })

  let str = ""
  // str += `export const ${camelNameEvent}DataJson = \`${JSON.stringify(jsonType)}\`\n`

  str += "/**\n"
  str += ` * ${jsonType.description}\n`
  str += " */\n"
  str += `export type ${camelNameEvent}Data = {\n`
  str += jsonType.attributes.map(atr => generateAttributeDefinition(atr, 1)).join("\n")
  str += `\n}\n`

  str += `export type ${camelNameEvent}Envelope = {\n`
  str += `  detailType: "${jsonType.name}",\n`
  str += `  data: ${camelNameEvent}Data,\n`
  str += `  time: number,\n`
  str += `  source: string,\n`
  str += `  account: string,\n`
  str += `  version: string,\n`
  str += `  id: string,\n`
  str += `}\n`

  str += createEvent(jsonType, camelNameEvent)

  str += "\n\n"


  fs.writeFileSync("generated/index.ts", str, { flag: 'a+' })
}

function generateAttributeDefinition(attribute, nest, isOneOf = false) {
  let str = isOneOf ? "" : `${indent(nest)}/** ${attribute.description} */\n`
  str += isOneOf ? "" : `${indent(nest)}${attribute.name}${attribute.required ? "" : "?"}: `

  if (attribute.attributes !== undefined) {
    str += "{\n" + attribute.attributes.map(atr => generateAttributeDefinition(atr, nest + 1)).join("\n") + "\n" + indent(nest) + "}"
  } else if (attribute.enum !== undefined) {
    str += generateEnumDefinition(attribute)
  } else if (attribute.oneOf !== undefined) {
    str += generateOneOfDefinition(attribute, nest)
  } else if (attribute.arrayOf !== undefined) {
    str += generateArrayOfDefinition(attribute, nest)
  } else if (typeof attribute.type === "string") {
    str += attribute.type
  }
  // Append semicolon to terminate property lines, but not inside union members
  if (!isOneOf) {
    str += ";"
  }
  return str
}

function generateOneOfDefinition(attribute, nest) {
  let str = ""
  str += attribute.oneOf.map(atr => {
    if (typeof atr === "string") {
      return atr
    }
    return generateAttributeDefinition(atr, nest + 1, true)
  }).join(" | ")
  str += `\n${indent(nest)}`
  return str
}

function generateArrayOfDefinition(attribute, nest) {
  if (typeof attribute.arrayOf === "string") {
    return attribute.arrayOf + "[]"
  } else if (attribute.arrayOf.attributes !== undefined) {
    let str = "{"
    str += attribute.arrayOf.attributes.map(atr => generateAttributeDefinition(atr, nest + 1)).join("\n")
    str += `\n${indent(nest)}}[]`
    return str
  }
  return `(${attribute.arrayOf.join(" | ")})[]`
}

function generateEnumDefinition(attribute) {
  return attribute.enum.map(atr => typeof atr === "string" ? `"${atr}"` : atr).join(" | ")
}

function createEvent(jsonType, camelNameEvent) {
  let str = `export namespace ${camelNameEvent} {
    \n`
  str += `  export const build = (data: ${camelNameEvent}Data) => {
      \n`
  str += `    if (!process.env.SERVICE) throw new Error("process.env.SERVICE must be defined")
        return {
          type: "${jsonType.name}",
          data: data,
          timestamp: Math.floor(Date.now() / 1000),
          source: process.env.SERVICE,
        }\n`
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



const def = `\nexport const DEFINITIONS = ${JSON.stringify(eventTypes)
  } \n`
fs.writeFileSync("generated/index.ts", def, { flag: 'a+' })