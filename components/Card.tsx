import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Card.module.scss'

type Props = {
  image: StaticImageData,
  ctaLabel: string,
  ctaUrl: string,
  title: string
};
const Card = ({image, ctaLabel, ctaUrl, title}: Props) => (
  <div className={styles.card}>
    <div className={styles.card__imageContainer}>
      <Image fill alt={title} src={image} />
    </div>
    <div className={styles.card__textContainer}>
      <div className={styles.card__textContainer__title}>{title}</div>
      <ul className={styles.card__textContainer__description}>
        <li className={styles.card__textContainer__description__item}>Item 1</li>
        <li className={styles.card__textContainer__description__item}>Item 2</li>
      </ul>
      <button
        className={styles.card__textContainer__cta}
        onClick={() => window.open(ctaUrl, "_blank", "noopener,noreferrer")}
      >
        {ctaLabel}
      </button>
    </div>
  </div>
)
export default Card
