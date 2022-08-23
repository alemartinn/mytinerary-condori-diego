import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../styles/BasePage.css';
import { Route, Routes } from 'react-router-dom';
import Hero from '../pages/Hero';
import Cities from '../pages/Cities';
import NewCity from '../pages/NewCity';


const BasePage = () => {
    return (  
        <div className='BasePage-Container'>
            <Header/>
            <main className='BasePage-Main'>
                <Routes>
                    <Route path='/' element={<Hero/>}/>
                    <Route path='cities' element={<Cities/>}/>
                    <Route path='newcities' element={<NewCity/>}/>
                </Routes>
            </main>
            <Footer bck={"none"}/>
        </div>
    );
}
 
export default BasePage;