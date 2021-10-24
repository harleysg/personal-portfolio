import Image from 'next/image'
import { useEffect, useState } from 'react'

import SimpleImageSlider from 'react-simple-image-slider'
import ReactSlidy from 'react-slidy'
import useMatchMedia from '../../hooks/useMatchMedia'
import { IMediaQueryList } from '@/interface/index'
import styles from './slider.module.scss'

const initialPaddingBottom = '56.25%'
const defaultProps = {
  styles: {},
  mediaQuery: IMediaQueryList,
  paddingBottom: '72%',
  images: [],
  others: {},
  className: ''
}

function SlideWrapper ({ children }) {
  return <div>{children}</div>
}

function SlideImage (props) {
  const { img, className, text } = props

  return (
    <div
      className={`${styles['c-slider_custom']}${
        className ? ` ${className}` : ''
      }`}
    >
      <Image alt='' src={img.url} width={1141} height={644} />
      <button>{text}</button>
    </div>
  )
}

export default function Slider ({
  styles = defaultProps.styles,
  mediaQuery = IMediaQueryList,
  paddingBottom = defaultProps.paddingBottom,
  images = defaultProps.images,
  others = defaultProps.others,
  className = defaultProps.className
}) {
  const isMobileSize = useMatchMedia(mediaQuery)
  const [customRootSliderStyle, setCustomRootSliderStyle] = useState(() => {
    return { ...styles, paddingBottom }
  })
  const [onMobileClass, setOnMobileClass] = useState(false)

  useEffect(() => {
    if (isMobileSize.match) {
      setCustomRootSliderStyle((styles) => ({
        ...styles,
        paddingBottom: paddingBottom || initialPaddingBottom
      }))
      setOnMobileClass('isMobile')
    } else {
      setCustomRootSliderStyle((styles) => ({
        ...styles,
        paddingBottom: initialPaddingBottom
      }))
      setOnMobileClass('notMobile')
    }
  }, [setCustomRootSliderStyle, isMobileSize, paddingBottom, setOnMobileClass])

  if (images && images.length) {
    return (
      <SlideWrapper className={className}>
        {
        others.slideOption
          ? (
            <SimpleImageSlider
              width='100%'
              height='100%'
              images={images}
              showBullets
              showNavs
              style={customRootSliderStyle}
              {...others}
            />
            )
          : (
            <ReactSlidy>
              {images.map((img) => (
                <SlideImage
                  key={img}
                  img={img}
                  text='View more'
                  className={`${onMobileClass} ${className}`}
                />
              ))}
            </ReactSlidy>)
        }
      </SlideWrapper>
    )
  } else {
    return <></>
  }
}
