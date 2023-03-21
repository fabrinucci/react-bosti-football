import { useState, useEffect } from 'react';
import { getLeagues } from '../api';
import { Leagues } from '../interfaces';

export const useLeagues = () => {
  const [leagues, setLeagues] = useState<Leagues>();
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
