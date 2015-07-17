const from = Object.create(null)
const to = Object.create(null)

export function convertFrom(value, format) {
  let converter = from[format]
  if (!converter) throw new Error("Source format " + format + " not defined")
  return converter(value)
}

export function convertTo(doc, format) {
  let converter = from[format]
  if (!converter) throw new Error("Target format " + format + " not defined")
  return converter(doc)
}

export function knownSource(format) { return !!from[format] }
export function knownTarget(format) { return !!to[format] }

export function defineSource(format, func) { from[format] = func }
export function defineTarget(format, func) { to[format] = func }