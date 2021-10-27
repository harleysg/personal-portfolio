import { Children, useEffect, useState } from 'react'

import ReactSlidy from 'react-slidy'
import useMatchMedia from '../../hooks/useMatchMedia'
import { ISlider } from '@/interface/index'

export default function Slider ({
  mediaQuery = ISlider.mediaQuery,
  className = ISlider.className,
  children = null,
  useMediaQuery = false,
  ...props
}) {
  const isMobileSize = useMatchMedia(useMediaQuery, mediaQuery)
  const [onMobileClass, setOnMobileClass] = useState(false)
  const slides = Children.count(children)

  useEffect(() => {
    if (isMobileSize.match) {
      setOnMobileClass('isMobile')
    } else {
      setOnMobileClass('notMobile')
    }
  }, [isMobileSize, setOnMobileClass])

  if (slides) {
    return (
      <div className={className.concat(` ${onMobileClass}`)}>
        <ReactSlidy lazyLoadSlider={false} showArrows {...props}>
          {
            children
          }
        </ReactSlidy>
      </div>
    )
  } else { return <></> }
}
