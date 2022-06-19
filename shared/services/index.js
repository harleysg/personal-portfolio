import { fetcher } from './fetcher'

export const taggedTemplate = (strings, ...raw) => {
  const message = strings.slice()

  raw.forEach((val, index) => {
    message[index] += val
  })

  return message.join('')
}

export const pageview = (url) => {
  if (window) {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: 'pageview',
      page: url
    })
  }
}

export { fetcher }
