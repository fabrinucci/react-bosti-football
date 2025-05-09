import { useState, useEffect } from 'react';
import { getLeague } from '../api';
import { ILeague } from '../interfaces/league';

export const useLeague = () => {
  const [league, setLeague] = useState<ILeague>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLeagues = async () => {
    const fetchData = async () => {
      const data = await getLeague();
      return data;
    };
    return fetchData();
  };

  useEffect(() => {
    handleLeagues()
      .then((res) => setLeague(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { league, isLoading, error };
};
