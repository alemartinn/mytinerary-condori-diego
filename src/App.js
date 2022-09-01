import BasePage from './layouts/BasePage';
import ScrollToTop from './components/ScrollToTop';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import Error404 from './pages/Error404';
import EditCity from './pages/EditCity';
import UnderConstruction from './pages/UnderConstruction'

function App() {
  return (
    <>
      <ScrollToTop />
      <BasePage>
        <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Hero/>}/>
            <Route path='cities' element={<Cities/>}/>
            <Route path='cities/:id' element={<UnderConstruction/>}/>
            <Route path='newcities' element={<NewCity/>}/>
            <Route path='editcity' element={<EditCity/>}/>
        </Routes>
      </BasePage>
    </>
  );
}

export default App;