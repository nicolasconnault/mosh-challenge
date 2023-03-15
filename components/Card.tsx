import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Card.module.scss'
import Accordion from '../components/Accordion';

type Props = {
  image: StaticImageData,
  ctaLabel: string,
  ctaUrl: string,
  title: string,
  benefits: [string]
};

const renderBenefits = (benefits: [string]) => (
  <ul className={styles.card__textContainer__benefitsContainer__benefits}>
    {benefits.map((benefit, index) => (
      <li key={index} className={styles.card__textContainer__benefitsContainer__benefits__item}>{benefit}</li>
    ))}
  </ul>
)

const Card = ({image, ctaLabel, ctaUrl, title, benefits}: Props) => (
  <div className={styles.card}>
    <div className={styles.card__imageContainer}>
      <Image fill alt={title} src={image} className={styles.card__imageContainer__image} />
    </div>
    <div className={styles.card__textContainer}>
      <div className={styles['card__textContainer__benefitsContainer-mobile']}>
        <Accordion title={title}>
          {renderBenefits(benefits)}
        </Accordion>
      </div>
      <div className={styles['card__textContainer__benefitsContainer-desktop']}>
        <div className={styles.card__textContainer__title}>{title}</div>
        {renderBenefits(benefits)}
      </div>
      <button
        className={styles.card__textContainer__cta}
        onClick={() => window.open(ctaUrl, "noreferrer")}
      >
        {ctaLabel}
      </button>
    </div>
  </div>
)
export default Card
