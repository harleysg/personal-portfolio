import { useEffect, useRef } from 'react'

import css from './gridCard.module.scss'

export default function GridCard({ children, ...props }) {
  const $main = useRef(null)

  useEffect(() => {
    const $el = $main.current
    if ($el && props['scroll-enable']) {
      $el.scrollLeft = ($el.scrollWidth - $el.clientWidth) / 2.5
    }
    if ($el && props.colunms) {
      $el.style.setProperty('--dynamic-columns-count', props.colunms)
    }
    if ($el && props['children-size']) {
      $el.style.setProperty('--dynamic-children-column-end', props['children-size'])
    }
  }, [])
  return (
    <div
      className={`${css['grid-cards']} ${
        props['scroll-enable'] && css['scroll-enable']
      }`}
      {...props}
      ref={$main}
    >
      {children}
    </div>
  )
}
