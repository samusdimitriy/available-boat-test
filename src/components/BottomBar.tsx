import { useNavigate, useLocation } from 'react-router-dom';
import { AppOutline, StarOutline, UserOutline } from 'antd-mobile-icons';
import styles from './BottomBar.module.scss';

export default function BottomBar() {
  const nav = useNavigate();
  const { pathname } = useLocation();

  if (pathname === '/' || pathname === '/register') return null;

  return (
    <div className={styles.bar}>
      <button onClick={() => nav('/yachts')} className={pathname === '/yachts' ? styles.active : ''}>
        <AppOutline />
        <span>Home</span>
      </button>
      <button onClick={() => nav('/saved')} className={pathname === '/saved' ? styles.active : ''}>
        <StarOutline />
        <span>Saved</span>
      </button>
      <button onClick={() => nav('/profile')} className={pathname.startsWith('/profile') ? styles.active : ''}>
        <UserOutline />
        <span>Profile</span>
      </button>
    </div>
  );
}
