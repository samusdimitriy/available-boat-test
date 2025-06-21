import { Button } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div className="page">
      <h2>Profile</h2>
      <p>Email: {user?.email}</p>
      <Button type="primary" onClick={() => nav('/profile/edit')} block style={{ marginBottom: 8 }}>
        Edit Profile
      </Button>
      <Button danger onClick={logout} block>
        Log out
      </Button>
    </div>
  );
}
