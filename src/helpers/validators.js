function converToISOString(d) {
  const date = new Date(d)
  if (isNaN(new Date(date)) === false) {
    return date.toISOString()
  }
}

export default converToISOString
