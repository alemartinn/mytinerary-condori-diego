import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/UserMenu.css'

const UserMenu = ({mostrarUserMenu, clickMostrarUserMenu}) => {
    
    useEffect(() => {
        let headerUserMenu = document.getElementById('HeaderUserMenu')
        mostrarUserMenu ? headerUserMenu.style.right='0' : headerUserMenu.style.right='-200px'
    },[mostrarUserMenu])

    return (  
        <nav className='HeaderUserMenu' id='HeaderUserMenu'>
            <LinkRouter to='/login' onClick={clickMostrarUserMenu}> Log In </LinkRouter>
            <LinkRouter to='/settings' onClick={clickMostrarUserMenu}> Settings </LinkRouter>
            <LinkRouter to='/help' onClick={clickMostrarUserMenu}> Help </LinkRouter>
        </nav>
    );
}

export default UserMenu;