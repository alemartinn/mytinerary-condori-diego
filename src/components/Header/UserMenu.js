import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/UserMenu.css'

const UserMenu = ({showUserMenu, clickShowUserMenu}) => {
    
    useEffect(() => {
        let headerUserMenu = document.getElementById('HeaderUserMenu')
        showUserMenu ? headerUserMenu.style.right='0' : headerUserMenu.style.right='-200px'
    },[showUserMenu])

    return (  
        <nav className='HeaderUserMenu' id='HeaderUserMenu'>
            <LinkRouter to='/login' onClick={clickShowUserMenu}> Log In </LinkRouter>
            <LinkRouter to='/settings' onClick={clickShowUserMenu}> Settings </LinkRouter>
            <LinkRouter to='/help' onClick={clickShowUserMenu}> Help </LinkRouter>
        </nav>
    );
}

export default UserMenu;