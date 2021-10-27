import { useEffect, useState } from 'react'

import { IMediaQueryList } from '@/interface/index'

export default function useMatchMedia (useMediaQuery = false, mediaQueryList = IMediaQueryList) {
  const [match, setMatch] = useState(mediaQueryList)

  useEffect(() => {
    const splitMedia = mediaQueryList.media.split(' ')[1].split('px')[0]
    const getMediaNumber = Number(splitMedia)
    setMatch(
      (state) => ({ ...state, match: window.innerWidth < getMediaNumber })
    )
  }, [mediaQueryList])

  useEffect(() => {
    if (useMediaQuery && mediaQueryList.media) {
      const matchMedia = window.matchMedia(mediaQueryList.media)
      const callback = ({ matches }) => setMatch(
        (state) => ({ ...state, match: matches })
      )

      matchMedia.addEventListener('change', callback)

      return () => matchMedia.removeEventListener('change', callback)
    }
  }, [setMatch, mediaQueryList, useMediaQuery])

  return match
}
