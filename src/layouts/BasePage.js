import React from 'react';
import Footer from '../components/Footer'
import '../styles/BasePage.css'

const BasePage = () => {
    return (  
        <div className='BasePage-Container'>
            <header>
                header
            </header>
            <main className='BasePage-Main'>
                Central Content
            </main>
            <Footer bck={"none"}/>
        </div>
    );
}
 
export default BasePage;