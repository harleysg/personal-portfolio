import Head from 'next/head'

export default function OpenGraphProtocol ({
  title = '',
  image = '/images/preview.png',
  description = 'based on University project design Cudio Studio',
  url = 'https://personal-portfolio-harleysg.vercel.app/',
  twitterOn = false
}) {
  return (
    <Head>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} key='title' />
      <meta property='og:image' content={image} key='image' />
      <meta property='og:description' content={description} key='description' />
      <meta property='og:url' content={url} key='url' />
      <meta property='og:locale' content='es_CO' />
      <meta property='og:locale:alternate' content='en_US' />
      {
        twitterOn && (
          <TwitterOG
            title={title}
            site=''
            description={description}
          />
        )
      }
    </Head>
  )
}

export function TwitterOG ({
  site = '',
  title = '',
  description = ''
}) {
  return (
    <>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={site} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* TODO: <meta name='twitter:image' content={image} /> */}
    </>
  )
}
