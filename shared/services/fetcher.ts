export const fetcher = (url: string, options = {}) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
