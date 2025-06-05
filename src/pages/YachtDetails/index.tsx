import { useParams } from 'react-router-dom';
import { useYachts } from '../../contexts/YachtContext';
import Header from '../../components/Header';
import FAB from '../../components/FAB';
import { StarFilled } from '@ant-design/icons';

export default function YachtDetails() {
  const { id } = useParams();
  const { yachts, toggleSave } = useYachts();

  const yacht = yachts.find(y => y.id === id);
  if (!yacht) return null;

  return (
    <div>
      <Header title="Yacht Details" />
      <img src={yacht.image} alt="" style={{ width: '100%' }} />
      <div className="page">
        <h2>{yacht.name}</h2>
        <p>{yacht.description}</p>
      </div>
      <FAB
        icon={<StarFilled />}
        onClick={() => toggleSave(yacht.id)}
      />
    </div>
  );
}
