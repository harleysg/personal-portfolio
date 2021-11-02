export const taggedTemplate = (strings, ...raw) => {
  const message = strings.slice()

  raw.forEach((val, index) => {
    message[index] += val
  })

  return message.join('')
}
