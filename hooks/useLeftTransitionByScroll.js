import { useEffect } from 'react'
import scrollEvent from '@/utils/scrollEvent'

export default function useLeftTransitionByScroll({ref, delay = 90}) {
  useEffect(() => {
    function handleHeaddingMovement () {
      const scrollSize = scrollEvent.getScrollTop()
      const $elm = ref.current

      setTimeout(() => {
        $elm && ($elm.style.left = `-${scrollSize / 5}px`)
      }, delay)
    }

    document.addEventListener('scroll', handleHeaddingMovement)

    return () => {
      document.removeEventListener('scroll', handleHeaddingMovement)
    }
  }, [])
}
