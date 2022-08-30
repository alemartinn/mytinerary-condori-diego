import BasePage from './layouts/BasePage';
import { Route, Routes } from 'react-router-dom';
import Hero from '../pages/Hero';
import Cities from '../pages/Cities';
import NewCity from '../pages/NewCity';
import Error404 from '../pages/Error404';

function App() {
  return (
    <>
    <BasePage>
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<Hero/>}/>
        <Route path='cities' element={<Cities/>}/>
        <Route path='newcities' element={<NewCity/>}/>
      </Routes>
    </BasePage>
    </>
  );
}

export default App;
