import { Button } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import BottomBar from '../../components/BottomBar';
import FAB from '../../components/FAB';
import { EditOutlined } from '@ant-design/icons';

export default function Profile() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div className="page">
      <Header title="Profile" />
      <Card>
        <p>Email: {user?.email}</p>
      </Card>
      <Button type="primary" onClick={() => nav('/profile/edit')} block style={{ marginTop: 16 }}>
        Edit Profile
      </Button>
      <Button danger onClick={logout} block style={{ marginTop: 8 }}>
        Log out
      </Button>
      <BottomBar />
      <FAB icon={<EditOutlined />} onClick={() => nav('/profile/edit')} />
    </div>
  );
}
