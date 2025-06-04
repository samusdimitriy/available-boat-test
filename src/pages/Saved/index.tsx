import { List, Button } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';

export default function Saved() {
  const { yachts, saved, toggleSave } = useYachts();
  const nav = useNavigate();

  const data = yachts.filter(y => saved.includes(y.id));

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Saved Yachts</h2>
      <List
        itemLayout="horizontal"
        dataSource={data}
        locale={{ emptyText: 'No saved yachts' }}
        renderItem={item => (
          <List.Item
            actions={[
              <Button size="small" onClick={() => toggleSave(item.id)}>
                Remove
              </Button>,
            ]}
            onClick={() => nav(`/yacht/${item.id}`)}
          >
            <List.Item.Meta
              avatar={<img src={item.image} alt="" style={{ width: 64, height: 64 }} />}
              title={item.name}
              description={item.type}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
