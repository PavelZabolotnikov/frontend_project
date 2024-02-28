import { Tarif } from './types/type';

export const loadTarifs = async (): Promise<Tarif[]> => {
  const res = await fetch('/api/tarif');
  return res.json();
};
