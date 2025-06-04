import { createContext, useContext, useState } from 'react';
import type { Dayjs } from 'dayjs';

export interface Yacht {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
}

interface YachtContext {
  yachts: Yacht[];
  saved: string[];
  dates: [Dayjs | null, Dayjs | null];
  setDates: (d: [Dayjs | null, Dayjs | null]) => void;
  toggleSave: (id: string) => void;
}

const dummyYachts: Yacht[] = [
  {
    id: '1',
    name: 'Ocean Dream',
    type: 'Luxury Yacht',
    image: 'https://placehold.co/600x400',
    description: 'This luxury yacht offers an unparalleled sailing experience.'
  },
  {
    id: '2',
    name: 'Sea Breeze',
    type: 'Catamaran',
    image: 'https://placehold.co/600x400',
    description: 'Comfortable catamaran for family trips.'
  },
];

const ctx = createContext<YachtContext | null>(null);

export const YachtProvider = ({ children }: { children: React.ReactNode }) => {
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [saved, setSaved] = useState<string[]>([]);

  const toggleSave = (id: string) => {
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <ctx.Provider value={{ yachts: dummyYachts, saved, dates, setDates, toggleSave }}>
      {children}
    </ctx.Provider>
  );
};

export const useYachts = () => {
  const value = useContext(ctx);
  if (!value) throw new Error('YachtProvider not found');
  return value;
};
