import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/NavBar.css'

const NavBar = ({showNavMenu, clickShowNavMenu}) => {
    
    useEffect(() => {
        let headerNav = document.getElementById('HeaderNav')
        showNavMenu ? headerNav.style.left='0%' : headerNav.style.left='-100%'
    },[showNavMenu])

    return (  
        <nav className='HeaderNav' id='HeaderNav'>
            <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
            <LinkRouter to='/cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>
            <LinkRouter to='/newcities' onClick={clickShowNavMenu}> NEW CITIES </LinkRouter>
        </nav>
    );
}

export default NavBar;