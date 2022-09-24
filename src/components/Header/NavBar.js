import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/NavBar.css';
import { useSelector } from 'react-redux';

const NavBar = ({showNavMenu, clickShowNavMenu}) => {
    
    const userRedux = useSelector(state => state.user.u)

    useEffect(() => {
        let headerNav = document.getElementById('HeaderNav')
        showNavMenu ? headerNav.style.left='0%' : headerNav.style.left='-100%'
    },[showNavMenu])

    return (  
        <nav className='HeaderNav' id='HeaderNav'>
            {userRedux ?
            <>
                {(userRedux.role === "admin")?
                <>
                    <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
                    <LinkRouter to='cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>          
                    <LinkRouter to={`mytineraries/${userRedux.id}`} onClick={clickShowNavMenu}> MyTINERARY </LinkRouter>    
                    <LinkRouter to='editcity' onClick={clickShowNavMenu}> EDIT CITY </LinkRouter>
                    <LinkRouter to='newcities' onClick={clickShowNavMenu}> NEW CITY </LinkRouter>
                </>
                :
                <>
                    <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
                    <LinkRouter to='/cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>
                    <LinkRouter to={`mytineraries/${userRedux.id}`} onClick={clickShowNavMenu}> MyTINERARY </LinkRouter> 
                </>
                }
            </>
            :
            <>
                <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
                <LinkRouter to='/cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>
            </>
            }
            
        </nav>
    );
}

export default NavBar;