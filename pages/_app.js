import '@/styles/_typograph.scss'
import '@/styles/_variables.scss'
import '@/styles/_reset.scss'
import '@/styles/_base.scss'
import '@/styles/_globals.scss'
import '@/styles/_specificity.scss'

import 'react-slidy/lib/index.scss'

import GoogleTagManager from '@/component/seo/gtm'

import useMouse from 'hooks/useMouse'
import useThemeSetector from 'hooks/useThemeSetector'

function MyApp ({ Component, pageProps }) {
  useMouse()
  useThemeSetector()

  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  )
}

export default MyApp
