import formatTime from './time-formatter'

export function converToISOString(d) {
  const date = new Date(d)
  if (isNaN(new Date(date)) === false) {
    return date.toISOString()
  }
}

export function formatToTime(value) {
  if (!isNaN(Date.parse(value))) {
    return formatTime(value)
  }
  return value
}
