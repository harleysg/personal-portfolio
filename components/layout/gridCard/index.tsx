import { useEffect, useRef } from 'react'

import css from './gridCard.module.scss'

export default function GridCard({ children, ...props }) {
  const $main = useRef(null)

  useEffect(() => {
    const $el = $main.current
    if ($el) $el.scrollLeft = ($el.scrollWidth - $el.clientWidth) / 2
  }, [])
  return (
    <div className={css['grid-cards']} {...props} ref={$main}>
      {children}
    </div>
  )
}
