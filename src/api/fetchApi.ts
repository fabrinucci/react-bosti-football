import { footballApi } from './';
import { Leagues } from '../interfaces';

export const getLeagues = async () => {
  const res = await footballApi.get<Leagues>('/leagues');
  const data = res.data;
  return data;
};
