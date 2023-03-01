import Image from 'next/image'
import Link from 'next/link'

import Slider from '../slider'
import { IconRigth, IconLeft } from '../icons/arrow'
import { ISlider } from '@/interface/index'
import styles from './slider.module.scss'

export default function CustomSlider({
  className,
  mediaQuery = ISlider.mediaQuery,
  slides = ISlider.slides
}) {
  function CustomArrowLeft(props) {
    return <CustomArrow {...props} emoji={<IconLeft />} className="arrowLeft" />
  }

  function CustomArrowRight(props) {
    return <CustomArrow {...props} emoji={<IconRigth />} className="arrowRight" />
  }
  return (
    <Slider
      useMediaQuery
      mediaQuery={mediaQuery}
      className={`${styles['c-slider_custom']} ${
        className || ''
      }`}
      ArrowLeft={CustomArrowLeft} ArrowRight={CustomArrowRight}
    >
      {
        slides.map((slide) => (
          <div key={slide.id} className={`${styles['c-slider_custom-slide']}`}>
            <Image alt="" src={slide.url} width={1141} height={644} />
            <Link href={slide.action}>
              <a className={`${styles['c-slider_custom-btnAction']}`}>{slide.btnText}</a>
            </Link>
          </div>
        ))
      }
    </Slider>
  )
}

function CustomArrow({ emoji, className, ...props }) {
  return (
    <button {...props} className={`${styles['c-slider_custom-arrowBtn']}`.concat(` ${className}`)}>
      <span role="img" aria-label="Arrow">
        {emoji}
      </span>
    </button>
  )
}
