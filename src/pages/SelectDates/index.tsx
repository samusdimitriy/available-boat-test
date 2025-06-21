import { Button, Calendar, Badge } from 'antd';
import { useYachts } from '../../contexts/YachtContext';
import { useNavigate } from 'react-router-dom';
import dayjs, { Dayjs } from 'dayjs';

export default function SelectDates() {
  const { dates, setDates } = useYachts();
  const nav = useNavigate();

  const onSelect = (date: Dayjs) => {
    const [start, end] = dates;
    if (!start || (start && end)) {
      setDates([date, null]);
    } else if (date.isBefore(start, 'date')) {
      setDates([date, null]);
    } else {
      setDates([start, date]);
    }
  };

  const renderCell = (current: Dayjs) => {
    const [start, end] = dates;
    const isStart = start && current.isSame(start, 'date');
    const isEnd = end && current.isSame(end, 'date');
    const inRange =
      start && end && current.isAfter(start, 'date') && current.isBefore(end, 'date');

    const cls = [
      'ant-picker-cell-inner',
      'custom-date-cell',
      isStart ? 'selected-start' : '',
      isEnd ? 'selected-end' : '',
      inRange ? 'selected-range' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={cls}>
        <div>{current.date()}</div>
        <div className="badges">
          <Badge color="#ff4d4f" dot />
          <Badge color="#52c41a" dot />
          <Badge color="#1677ff" dot />
        </div>
      </div>
    );
  };

  return (
    <div className="page">
      <h2>Select dates</h2>
      <Calendar
        fullscreen={false}
        value={dates[0] || dayjs()}
        onSelect={onSelect}
        dateFullCellRender={renderCell}
        className="mb-24"
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
