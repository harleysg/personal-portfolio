import '@/styles/_typograph.scss'
import '@/styles/_variables.scss'
import '@/styles/_reset.scss'
import '@/styles/_base.scss'
import '@/styles/_globals.scss'
import '@/styles/_specificity.scss'

import useMouse from 'hooks/useMouse'

function MyApp({ Component, pageProps }) {

  useMouse();

  return <Component {...pageProps} />
}

export default MyApp
