import { useNavigate } from 'react-router-dom';
import { useLeagues } from '../hooks';

export const Leagues = () => {
  const { leagues, isLoading, error } = useLeagues();
  const navigate = useNavigate();

  return (
    <ul className='grid grid-cols-3 gap-5'>
      {error && <li>Error: {error}</li>}
      {isLoading && <li>loading....</li>}
      {leagues?.response.map((res) => (
        <li className='flex flex-col items-center' key={res.league.id}>
          <h2 className='my-3 font-medium'>{res.league.name}</h2>
          <button
            onClick={() => {
              navigate(`/leagues/${res.league.id}`);
            }}
          >
            <img width='100' src={res.league.logo} alt={res.league.name} />
          </button>
        </li>
      ))}
    </ul>
  );
};
