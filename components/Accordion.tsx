import { ReactNode, useState } from 'react';
import styles from '@/styles/Accordion.module.scss';
import CaretIcon from './CaretIcon';

interface AccordionProps {
  title: string,
  children: ReactNode;
}

function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__title} onClick={toggleAccordion}>
        {title}
        <div className={styles.accordion__icon}>
          <CaretIcon direction={isOpen ? 'up' : 'down'} />
        </div>
      </div>
      <div
        className={styles[`accordion__content${isOpen ? "--open" : ""}`]}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
