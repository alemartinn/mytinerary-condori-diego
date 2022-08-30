import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import '../styles/BasePage.css';



const BasePage = (props) => {
    
    return (  
        <div className='BasePage-Container'>
            <Header/>
            <main className='BasePage-Main'>
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}
 
export default BasePage;