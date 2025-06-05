import { AiOutlineSearch } from 'react-icons/ai';
import styles from './Header.module.scss';

interface Props {
  title?: string;
}

export default function Header({ title }: Props) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <AiOutlineSearch className={styles.icon} />
    </header>
  );
}
