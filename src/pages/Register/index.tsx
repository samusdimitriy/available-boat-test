import { Form, Input, Button, message } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await register(values.email, values.password);
      message.success('Account created');
      nav('/');
    } catch (e) {
      const err = e as Error;
      message.error(err.message);
    }
  };

  return (
    <div className="page">
      <h2>Create account</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, min: 6 }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign up
        </Button>
      </Form>
    </div>
  );
}
