import React from 'react';

import styles from '@/styles/CaretIcon.module.scss';

interface CaretIconProps {
  direction: 'up' | 'down';
}

export default function CaretIcon({ direction }: CaretIconProps) {
  const className = direction === 'down' ? styles.caretIcon : styles.caretIcon_up;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
