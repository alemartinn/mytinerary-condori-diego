import React from 'react';
import { useState } from 'react';
import '../styles/Header.css'
import NavBar from './Header/NavBar';
import ButtonNavBar from './Header/ButtonNavBar';
import UserMenu from './Header/UserMenu';

const Header = () => {

    const [showNavMenu, setShowNavMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const client = localStorage.getItem("client");
    const userLocal = JSON.parse(client);

    const clickShowNavMenu = () => {
        setShowNavMenu(!showNavMenu);
    }
    const closeMenuNav = () => {
        setShowNavMenu(false);
    }

    const clickShowUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    }
    const closeUserMenuNav = () => {
        setShowUserMenu(false);
    }

    return (  
        <header>
            <ButtonNavBar showNavMenu={showNavMenu} clickShowNavMenu={clickShowNavMenu} closeUserMenuNav={closeUserMenuNav}/>
            <NavBar className='NavBar' showNavMenu={showNavMenu} clickShowNavMenu={clickShowNavMenu}/>
            <h3 className='HeaderTitle'>
                <img src='/logoMyTinerary.png' alt='logoMyTinerary' className='HeaderLogoImg'/>
            </h3>
            <UserMenu className='HeaderUserMenu' showUserMenu={showUserMenu} clickShowUserMenu={clickShowUserMenu}/>
            <button className='HeaderButton' onClick={() => {closeMenuNav(); clickShowUserMenu()}}>
                <div className="card-client">
                    <div className="user-picture">
                    {localStorage.getItem('client') ?
                        <>
                        <img className="user-picture" src={userLocal.photo} alt='User'/>
                        </>
                        :
                        <svg viewBox="0 0 448 512" fill="white" height= "30"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"></path>
                        </svg>
                        }
                    </div>
                </div>
            </button>
        </header>
    );
}
 
export default Header;