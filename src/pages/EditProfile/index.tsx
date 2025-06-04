import { Form, Input, Button, message } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { updateEmail, updatePassword } from 'firebase/auth';

export default function EditProfile() {
  const { user } = useAuth();
  const nav = useNavigate();

  const onFinish = async (values: { email: string; password?: string }) => {
    try {
      if (values.email && values.email !== user?.email) {
        await updateEmail(user!, values.email);
      }
      if (values.password) {
        await updatePassword(user!, values.password);
      }
      message.success('Profile updated');
      nav(-1);
    } catch (e) {
      const err = e as Error;
      message.error(err.message);
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Edit Profile</h2>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ email: user?.email }}>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}> 
          <Input />
        </Form.Item>
        <Form.Item label="New password" name="password">
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Save
        </Button>
      </Form>
    </div>
  );
}
