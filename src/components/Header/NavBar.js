import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/NavBar.css'

const NavBar = ({mostrarMenu, clickMostrarMenu}) => {
    
    useEffect(() => {
        let headerNav = document.getElementById('HeaderNav')
        mostrarMenu ? headerNav.style.left='0%' : headerNav.style.left='-100%'
    },[mostrarMenu])

    return (  
        <nav className='HeaderNav' id='HeaderNav'>
            <LinkRouter to='/' onClick={clickMostrarMenu}> HOME </LinkRouter>
            <LinkRouter to='/cities' onClick={clickMostrarMenu}> CITIES </LinkRouter>
            <LinkRouter to='/newcities' onClick={clickMostrarMenu}> NEW CITIES </LinkRouter>
        </nav>
    );
}

export default NavBar;