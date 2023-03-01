import Head from 'next/head'

import { IOGData } from '@/interface/index'
import { VERCEL_URL, LOCALHOST } from '@/shared/constants.js'
import { taggedTemplate } from '@/shared/services/index'

const url = (aditional = '') => taggedTemplate`https://${VERCEL_URL || LOCALHOST}${aditional}`

Object.entries(IOGData).forEach(([key]) => {
  key === 'type' && (IOGData.type = 'website')
  key === 'url' && (IOGData.url = url``)
  key === 'image' && (IOGData[key].url = url`/images/preview.png`)
  key === 'description' && (IOGData.description = 'based on University project design Cudio Studio')
})

export default function OpenGraphProtocol(props) {
  const { twitterOn = false } = props
  const og = { ...IOGData, ...props }

  return (
    <Head>
      <meta property="og:description" content={og.description} key="description" />
      <meta property="og:image" content={og.image?.url} key="image" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:title" content={og.title} key="title" />
      <meta property="og:type" content={og.type} />
      <meta property="og:url" content={og.url} key="url" />
      {
        twitterOn && (
          <TwitterOG
            title={og.title}
            site={og.type}
            description={og.description}
            image={og.image.url}
          />
        )
      }
    </Head>
  )
}

export function TwitterOG({
  site = '',
  title = '',
  description = '',
  image = ''
}) {
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={site} />
      <meta name="twitter:title" content={title} />
    </>
  )
}
