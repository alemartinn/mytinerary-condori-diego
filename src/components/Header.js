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

    return (  
        <header>
            <ButtonNavBar mostrarMenu={mostrarMenu} clickMostrarMenu={clickMostrarMenu}/>
            <NavBar className='NavBar' mostrarMenu={mostrarMenu} clickMostrarMenu={clickMostrarMenu}/>
            <h3 className='HeaderTitle'>
                <img src='/logoMyTinerary.png' alt='logoMyTinerary'/>
            </h3>
            <button className='HeaderButton'>
                <img src='https://png.pngitem.com/pimgs/s/130-1300400_user-hd-png-download.png' alt='logoIconUser'/>
            </button>
        </header>
    );
}
 
export default Header;