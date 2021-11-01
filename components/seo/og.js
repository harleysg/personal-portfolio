import Head from 'next/head'

import { IOGData } from '@/interface/index'
import { VERCEL_URL } from '@/shared/constants.js'

Object.entries(IOGData).forEach(([key]) => {
  key === 'description' && (IOGData.description = 'based on University project design Cudio Studio')
  key === 'image' && (IOGData.image.url &&= `${VERCEL_URL}/images/preview.png`)
  key === 'type' && (IOGData.type = 'website')
  key === 'url' && (IOGData.url = VERCEL_URL)
})

export default function OpenGraphProtocol (props) {
  const {
    twitterOn = false,
    op = {
      ...IOGData,
      ...props
    }
  } = props

  return (
    <Head>
      <meta property='og:description' content={op.description} key='description' />
      <meta property='og:image' content={op.image?.url} key='image' />
      <meta property='og:locale' content='es_CO' />
      <meta property='og:locale:alternate' content='en_US' />
      <meta property='og:title' content={op.title} key='title' />
      <meta property='og:type' content={op.type} />
      <meta property='og:url' content={op.url} key='url' />
      {
        twitterOn && (
          <TwitterOG
            title={op.title}
            site=''
            description={op.description}
            image={op.image.url}
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
