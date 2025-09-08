
export const kebabToCamelCase = (str) => {
  return str.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())
}
export const indent = (nest) => { return " ".repeat(nest * 2) }