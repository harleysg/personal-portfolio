import Image from 'next/image';
import css from './card.module.scss';

export default function Card({ name, title, description, mail }) {
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

          <Image
            className={css['c-card_image']}
            width={400}
            height={400}
            src='https://harleysg.github.io/portfolio-cubioStudio/assets/images/founders/founder_1.jpeg'
            alt={name}
          />
        </div>
      </div>
    </figure>
  );
}
