import { useRef } from 'react'
import useLeftTransitionByScroll from '@/hooks/useLeftTransitionByScroll'

import css from './index.module.scss'

export default function MegaHeadding ({ text }) {
  const HeaddingRef = useRef(null)
  useLeftTransitionByScroll({ ref: HeaddingRef })

  return (
    <div className={`${css['c-mega_headding-wrapper']}`}>
      <div className={`${css['c-mega_headding']}`} ref={ HeaddingRef }>{text}</div>
    </div>
  )
}
