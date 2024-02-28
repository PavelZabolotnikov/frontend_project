import { ICreatePayment  } from '@a2seven/yoo-checkout';

export const loadMoney = async (): Promise<string> => {
  const res = await fetch('/api/money');
  return res.json();
};