import { List, Button } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import BottomBar from '../../components/BottomBar';

import styles from './index.module.scss';

export default function AvailableYachts() {
  const { yachts, saved, toggleSave } = useYachts();
  const nav = useNavigate();

  return (
    <div className="page">
      <Header title="Available Yachts" />
      <Card className={styles.listCard}>
        <List
          itemLayout="horizontal"
          dataSource={yachts}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  type={saved.includes(item.id) ? 'primary' : 'default'}
                  size="small"
                  onClick={() => toggleSave(item.id)}
                >
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
      </Card>
      <BottomBar />
    </div>
  );
}
