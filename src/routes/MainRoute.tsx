import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, League, Leagues, Standings } from '../pages';
import { Footer, Header, Main } from '../components';

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/leagues' element={<Leagues />} />
          <Route path='/leagues/:leagueId' element={<League />} />
          <Route path='/standings' element={<Standings />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};
