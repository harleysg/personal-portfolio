import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { pageview } from '@/services/index'

const GoogleTagManager = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return children
}

export default GoogleTagManager
