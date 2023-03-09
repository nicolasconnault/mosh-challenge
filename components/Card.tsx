import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Card.module.scss'

type Props = {
  image: StaticImageData,
  ctaLabel: string,
  ctaUrl: string,
  title: string,
  benefits: [string]
};
const Card = ({image, ctaLabel, ctaUrl, title, benefits}: Props) => (
  <div className={styles.card}>
    <div className={styles.card__imageContainer}>
      <Image fill alt={title} src={image} />
    </div>
    <div className={styles.card__textContainer}>
      <div className={styles.card__textContainer__title}>{title}</div>
      <ul className={styles.card__textContainer__benefits}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.card__textContainer__benefits__item}>{benefit}</li>
        ))}
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
