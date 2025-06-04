import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  StarOutline,
  UserOutline,
} from 'antd-mobile-icons';

const MobileLayout = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <>
      <Outlet />
      {!(location.pathname === '/' || location.pathname === '/register') && (
        <TabBar onChange={key => nav(key)}>
          <TabBar.Item key="/yachts" icon={<AppOutline />} title="Home" />
          <TabBar.Item key="/saved" icon={<StarOutline />} title="Saved" />
          <TabBar.Item key="/profile" icon={<UserOutline />} title="Profile" />
        </TabBar>
      )}
    </>
  );
};

export default MobileLayout;
