import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password);
      nav('/yachts');
    } catch (e) {
      const err = e as Error;
      message.error(err.message);
    }
  };

  return (
    <div className="page">
      <h2>Welcome back</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, type: 'email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form>
      <div className="text-center mt-16">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}
