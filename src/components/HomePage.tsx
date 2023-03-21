import { useLeagues } from '../hooks';

export const HomePage = () => {
  const { leagues, isLoading, error } = useLeagues();

  return (
    <ul>
      {error && <li>Error: {error}</li>}
      {isLoading && <li>loading....</li>}
      {leagues?.response.map((res) => (
        <li key={res.league.id}>
          <h2>{res.league.name}</h2>
          <img src={res.league.logo} alt={res.league.name} />
        </li>
      ))}
    </ul>
  );
};
