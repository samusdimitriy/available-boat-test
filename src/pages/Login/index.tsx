import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const nav = useNavigate();

  const onFinish = () => nav('/dates');

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 32 }}>Welcome back</h2>
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
    </div>
  );
}
