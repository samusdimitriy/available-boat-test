import { List, Button } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Card from '../../components/Card';
import BottomBar from '../../components/BottomBar';
import styles from './index.module.scss';

export default function Saved() {
  const { yachts, saved, toggleSave } = useYachts();
  const nav = useNavigate();

  const data = yachts.filter(y => saved.includes(y.id));

  return (
    <div className="page">
      <Header title="Saved Yachts" />
      <Card className={styles.listCard}>
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
      </Card>
      <BottomBar />
    </div>
  );
}
