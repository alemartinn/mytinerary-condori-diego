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
import NewItinerary from './pages/NewItinerary';
import RouteNotUsers from './privatesRoutes/RouteNotUsers';
import RouteAdmin from './privatesRoutes/RouteAdmin';
import RouteS1Logged from './privatesRoutes/RouteS1Logged';
import RouteN1Logged from './privatesRoutes/RouteN1Logged';
import PatchItineraries from './pages/PatchItineraries';
import Profile from './pages/Profile';
import { useVerifyTokenQuery } from './features/authAPi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './features/userSlice';

function App() {
  /* It checks if there is an user logged after each refresh our app page */
  const { data } = useVerifyTokenQuery(localStorage.getItem("token"));
  const dispatch = useDispatch();
  useEffect(()=>{
    if (data){
      dispatch(addUser(data.response));
    }
  }, [data, dispatch])

  return (
    <>
      <ScrollToTop />
      <BasePage>
        <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path='/' element={<Hero/>}/>
            <Route path='auth/signup' element={<RouteNotUsers> <SignUp/> </RouteNotUsers>}/> 
            <Route path='auth/signin' element={<RouteN1Logged> <SignIn/> </RouteN1Logged>}/>
            <Route path='cities' element={<Cities/>}/>
            <Route path='cities/:id' element={<UnderConstruction/>}/>
            <Route path='newcities' element={ <RouteAdmin> <NewCity/> </RouteAdmin> }/>
            <Route path='details/:id' element={<Details/>}/>
            <Route path='editcity' element={<RouteAdmin> <EditCity/> </RouteAdmin>}/>
            <Route path='mytineraries/:id' element={<RouteS1Logged> <MyTineraries/> </RouteS1Logged>}/>
            <Route path='newitinerary/:id' element={<RouteS1Logged> <NewItinerary/> </RouteS1Logged> }/>
            <Route path='patchitineraries/:id' element={<RouteS1Logged> <PatchItineraries/> </RouteS1Logged>}/>
            <Route path='verified-account' element={<RouteS1Logged> <VerifiedAccount/> </RouteS1Logged>}/>
            <Route path='profile/:id' element={<RouteS1Logged> <Profile/> </RouteS1Logged>}/>
        </Routes>
      </BasePage>
    </>
  );
}

export default App;