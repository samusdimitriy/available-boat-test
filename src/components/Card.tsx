import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

export default function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx(styles.card, className)}>{children}</div>;
}
