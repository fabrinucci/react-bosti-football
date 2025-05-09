import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header>
      <nav className='flex items-center justify-evenly bg-emerald-700 p-5 text-gray-200'>
        <Link to='/'>Home</Link>
        <Link to='/leagues'>Leagues</Link>
        <Link to='/standings'>Standings</Link>
      </nav>
    </header>
  );
};
