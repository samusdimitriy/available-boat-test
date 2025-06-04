import { Button, DatePicker } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';
import type { Dayjs } from 'dayjs';

export default function SelectDates() {
  const { dates, setDates } = useYachts();
  const nav = useNavigate();

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 16 }}>Select dates</h2>
      <DatePicker.RangePicker
        value={dates as [Dayjs | null, Dayjs | null]}
        onChange={values => setDates(values as [Dayjs | null, Dayjs | null])}
        style={{ width: '100%', marginBottom: 24 }}
      />
      <Button
        type="primary"
        block
        disabled={!dates[0] || !dates[1]}
        onClick={() => nav('/yachts')}
      >
        Show available yachts
      </Button>
    </div>
  );
}
