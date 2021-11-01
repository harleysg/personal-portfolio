import Head from 'next/head'

import { IOGData } from '@/interface/index'

Object.entries(IOGData).forEach(([key, value]) => {
  key === 'description' && (IOGData[value] = 'based on University project design Cudio Studio')
  key === 'image' && (IOGData[value].url = `${process.env.NEXT_PUBLIC_VERCEL_URL}/images/preview.png`)
  key === 'type' && (IOGData[value] = 'website')
  key === 'url' && (IOGData[value] = process.env.NEXT_PUBLIC_VERCEL_URL)
})

export default function OpenGraphProtocol ({
  twitterOn = false,
  ...IOGData
}) {
  return (
    <Head>
      <meta property='og:description' content={IOGData.description} key='description' />
      <meta property='og:image' content={IOGData.image.url} key='image' />
      <meta property='og:locale' content='es_CO' />
      <meta property='og:locale:alternate' content='en_US' />
      <meta property='og:title' content={IOGData.title} key='title' />
      <meta property='og:type' content={IOGData.type} />
      <meta property='og:url' content={IOGData.url} key='url' />
      {
        twitterOn && (
          <TwitterOG
            title={IOGData.title}
            site=''
            description={IOGData.description}
            image={IOGData.image.url}
          />
        )
      }
    </Head>
  )
}

export function TwitterOG ({
  site = '',
  title = '',
  description = '',
  image = ''
}) {
  return (
    <>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:site' content={site} />
      <meta name='twitter:title' content={title} />
    </>
  )
}
