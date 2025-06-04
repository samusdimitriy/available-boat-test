import { Outlet, useNavigate } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  StarOutline,
  UserOutline,
} from 'antd-mobile-icons';

const MobileLayout = () => {
  const nav = useNavigate();

  return (
    <>
      <Outlet />
      <TabBar onChange={key => nav(key)}>
        <TabBar.Item key="/yachts"  icon={<AppOutline />}  title="Home" />
        <TabBar.Item key="/saved"   icon={<StarOutline />} title="Saved" />
        <TabBar.Item key="/profile" icon={<UserOutline />} title="Profile" />
      </TabBar>
    </>
  );
};

export default MobileLayout;
