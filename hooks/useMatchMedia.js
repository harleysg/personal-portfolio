import { useEffect, useState } from 'react'

import { IMediaQueryList } from '@/interface/index'

export default function useMatchMedia (mediaQueryList = IMediaQueryList) {
  const [match, setMatch] = useState(mediaQueryList)

  useEffect(() => {
    if (mediaQueryList.media) {
      const matchMedia = window.matchMedia(mediaQueryList.media)
      const callback = ({ matches }) => setMatch(
        (state) => ({ ...state, match: matches })
      )

      matchMedia.addEventListener('change', callback)

      return () => matchMedia.removeEventListener('change', callback)
    }
  }, [setMatch, mediaQueryList])

  return match
}
