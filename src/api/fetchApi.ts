import { footballApi } from './';
import { ILeagues } from '../interfaces/leagues';
import { ILeague } from '../interfaces/league';

export const getLeagues = async () => {
  const res = await footballApi.get<ILeagues>('/leagues');
  const data = res.data;
  return data;
};

export const getLeague = async () => {
  const res = await footballApi.get<ILeague>(`/leagues?id=39&season=2022`);
  const data = res.data;
  return data;
};
