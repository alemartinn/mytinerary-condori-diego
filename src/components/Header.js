import React from 'react';
import { useState } from 'react';
import '../styles/Header.css'
import NavBar from './Header/NavBar';
import ButtonNavBar from './Header/ButtonNavBar';

const Header = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)

    const clickMostrarMenu = () => {
        setMostrarMenu(!mostrarMenu);
    }
    
    const cerrarMenuNav = () => {
        setMostrarMenu(false)
    }

    return (  
        <header>
            <ButtonNavBar mostrarMenu={mostrarMenu} clickMostrarMenu={clickMostrarMenu}/>
            <NavBar className='NavBar' mostrarMenu={mostrarMenu} clickMostrarMenu={clickMostrarMenu}/>
            <h3 className='HeaderTitle'>
                <img src='/logoMyTinerary.png' alt='logoMyTinerary' className='HeaderLogoImg'/>
            </h3>
            <button className='HeaderButton' onClick={cerrarMenuNav}>
                <div className="card-client">
                    <div className="user-picture">
                        <svg viewBox="0 0 448 512" fill="white" height= "30"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                        </svg>
                    </div>
                </div>
            </button>
        </header>
    );
}
 
export default Header;