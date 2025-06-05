import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { useYachts } from '../../contexts/YachtContext';

export default function YachtDetails() {
  const { id } = useParams();
  const { yachts, toggleSave, saved } = useYachts();

  const yacht = yachts.find(y => y.id === id);
  if (!yacht) return null;

  return (
    <div>
      <img src={yacht.image} alt="" style={{ width: '100%' }} />
      <div className="page">
        <h2>{yacht.name}</h2>
        <p>{yacht.description}</p>
        <Button
          type={saved.includes(yacht.id) ? 'primary' : 'default'}
          onClick={() => toggleSave(yacht.id)}
        >
          {saved.includes(yacht.id) ? 'Saved' : 'Save'}
        </Button>
      </div>
    </div>
  );
}
