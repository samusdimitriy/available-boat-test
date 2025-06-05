import { List, Button } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';

export default function AvailableYachts() {
  const { yachts, saved, toggleSave } = useYachts();
  const nav = useNavigate();

  return (
    <div className="page">
      <h2>Available Yachts</h2>
      <List
        itemLayout="horizontal"
        dataSource={yachts}
        renderItem={item => (
          <List.Item
            actions={[
              <Button type={saved.includes(item.id) ? 'primary' : 'default'} size="small" onClick={() => toggleSave(item.id)}>
                Save
              </Button>,
            ]}
            onClick={() => nav(`/yacht/${item.id}`)}
          >
            <List.Item.Meta
              avatar={<img src={item.image} alt="" style={{ width: 64, height: 64, objectFit: 'cover' }} />}
              title={item.name}
              description={item.type}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
