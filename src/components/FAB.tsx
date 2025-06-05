import type { ReactNode } from 'react';
import styles from './FAB.module.scss';

interface Props {
  icon: ReactNode;
  onClick: () => void;
}

export default function FAB({ icon, onClick }: Props) {
  return (
    <button className={styles.fab} onClick={onClick} type="button">
      {icon}
    </button>
  );
}
