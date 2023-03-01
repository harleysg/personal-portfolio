import HeadNext from 'next/head'

export default function Head({ description = 'Personal portfolio by harley Santos Garzón', title = '' }) {
  return (
    <HeadNext>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </HeadNext>
  )
}
