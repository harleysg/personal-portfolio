import Image from 'next/image'
import { ICard } from '@/interface/index'

import css from './card.module.scss'

interface CardProps {
  name: string,
  title: string,
  description: string,
  url: string,
  image: {
    url: string;
    width: number;
    height: number;
  },
  options: {
    // eslint-disable-next-line
    max_content: boolean;
  },
  callback?: (a: HTMLElement) => void,
  other: string
}

export default function Card(props: CardProps) {
  const {
    name,
    title,
    description,
    url = ICard.html_url,
    image,
    options,
    callback
  } = props

  const handleCallBack = () => {
    if (typeof callback === 'function') {
      // eslint-disable-next-line node/no-callback-literal
      callback(document.activeElement as HTMLElement)
    }
  }

  return (
    <figure
      className={css.card}
    >
      <div className={css.card_content}>
        <figcaption className={css.card_caption}>
          <h4 className={css['card_caption-title']}>{name}</h4>
          {title && (
            <small className={css['card_caption-subtitle']}>{title}</small>
          )}
          <p
            className={`${css.card_description} ${
              options?.max_content && css['is-max-content']
            }`}
          >
            {description}
          </p>
          <div>
            {url && (
              <small>
                <button
                  role={'button'}
                  tabIndex={0}
                  className={css.card_link}
                  onClick={() => handleCallBack()}
                >
                  Ver más detalle
                </button>
              </small>
            )}
          </div>
        </figcaption>
      </div>
      {image && (
        <picture className={css.card_image}>
          <Image
            className={css['card_image-img']}
            width={image.width}
            height={image.height}
            src={image.url}
            alt={name}
          />
        </picture>
      )}
    </figure>
  )
}
