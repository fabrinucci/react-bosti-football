import { useState, useEffect } from 'react';
import { getLeagues } from '../api';
import { ILeagues } from '../interfaces/leagues';

export const useLeagues = () => {
  const [leagues, setLeagues] = useState<ILeagues>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLeagues = async () => {
    const fetchData = async () => {
      const data = await getLeagues();
      return data;
    };
    return fetchData();
  };

  useEffect(() => {
    handleLeagues()
      .then((res) => setLeagues(res))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { leagues, isLoading, error };
};
