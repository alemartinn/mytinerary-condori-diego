import BasePage from './layouts/BasePage';
import ScrollToTop from './components/ScrollToTop';
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import Error404 from './pages/Error404';
import EditCity from './pages/EditCity';
import UnderConstruction from './pages/UnderConstruction'
import Details from './pages/Details';
import MyTineraries from './pages/MyTineraries';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import VerifiedAccount from './pages/VerifiedAccount';

function App() {
  return (
    <>
      <ScrollToTop />
      <BasePage>
        <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Hero/>}/>
            <Route path='auth/signup' element={<SignUp/>}/>
            <Route path='auth/signin' element={<SignIn/>}/>
            <Route path='cities' element={<Cities/>}/>
            <Route path='cities/:id' element={<UnderConstruction/>}/>
            <Route path='newcities' element={<NewCity/>}/>
            <Route path='details/:id' element={<Details/>}/>
            <Route path='editcity' element={<EditCity/>}/>
            <Route path='mytineraries/:id' element={<MyTineraries/>}/>
            <Route path='verified-account' element={<VerifiedAccount/>}/>
        </Routes>
      </BasePage>
    </>
  );
}

export default App;