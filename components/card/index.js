import Image from 'next/image';
import css from './card.module.scss';
import { ICard } from "@/interface/index";

export default function Card({ name, title, description, mail, image } = ICard) {
  return (
    <figure className={css['c-card']}>
      <div className={css['c-card_wrapper']}>
        <div className={css['c-card_content']}>
          <figcaption className={css['c-card_caption']}>
            <h4 className={css['c-card_title']}>{name}</h4>
            {title && <small>{title}</small>}
            <p>{description}</p>
            <div>
              <small>
                <a className={css['c-card_link-email']} href={`mailto:${mail}`}>
                  {mail}
                </a>
              </small>
            </div>
          </figcaption>
          {
            image && <Image
            className={css['c-card_image']}
            width={image.width}
            height={image.height}
            src={image.url}
            alt={name}
          />
          }
        </div>
      </div>
    </figure>
  );
}
