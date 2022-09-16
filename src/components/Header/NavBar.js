import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../../styles/Header/NavBar.css'

const NavBar = ({showNavMenu, clickShowNavMenu}) => {
    
    useEffect(() => {
        let headerNav = document.getElementById('HeaderNav')
        showNavMenu ? headerNav.style.left='0%' : headerNav.style.left='-100%'
    },[showNavMenu])

    const client = localStorage.getItem("client")
    const userLocal = JSON.parse(client)
    let roleLocal = ""
    if(userLocal && userLocal.role === "admin") {
        roleLocal = "admin"
    } else {
        roleLocal = "user"
    }

    return (  
        <nav className='HeaderNav' id='HeaderNav'>
            {client?
            <>
                {(roleLocal === "admin")?
                <>
                    <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
                    <LinkRouter to='cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>          
                    <LinkRouter to='mytineraries/:id' onClick={clickShowNavMenu}> MyTINERARY </LinkRouter>    
                    <LinkRouter to='editcity' onClick={clickShowNavMenu}> EDIT CITY </LinkRouter>
                    <LinkRouter to='newcities' onClick={clickShowNavMenu}> NEW CITY </LinkRouter>
                </>
                :
                <>
                    <LinkRouter to='/' onClick={clickShowNavMenu}> HOME </LinkRouter>
                    <LinkRouter to='/cities' onClick={clickShowNavMenu}> CITIES </LinkRouter>
                    <LinkRouter to='mytineraries/:id' onClick={clickShowNavMenu}> MyTinerary </LinkRouter>
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