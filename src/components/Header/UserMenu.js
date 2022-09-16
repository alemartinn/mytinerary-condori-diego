import React, { useEffect } from 'react';
import { Link as LinkRouter,useNavigate } from 'react-router-dom';
import { useSignOutMutation } from '../../features/authAPi';
import '../../styles/Header/UserMenu.css'

const UserMenu = ({showUserMenu, clickShowUserMenu}) => {
    
    useEffect(() => {
        let headerUserMenu = document.getElementById('HeaderUserMenu')
        showUserMenu ? headerUserMenu.style.right='0' : headerUserMenu.style.right='-200px'
    },[showUserMenu])

    const client = localStorage.getItem("client")
    const userLocal = JSON.parse(client)
    let roleLocal = ""

    if(userLocal && userLocal.role === "admin") {
        roleLocal = "admin"
    } else {
        roleLocal = "user"
    }

    let name = userLocal?.name

    const [signOut] = useSignOutMutation()
    let Navigate = useNavigate()
    const signOutUser = async (e) => {
        await signOut({email :userLocal.email})
        localStorage.removeItem("client")
        clickShowUserMenu()
        Navigate("/")
    }

    return (  
        <nav className='HeaderUserMenu' id='HeaderUserMenu'>
            {client?
            <>
                {(roleLocal === "admin")?
                <>
                    <LinkRouter to='/' onClick={clickShowUserMenu}>{name}</LinkRouter>
                    <LinkRouter to='auth/signup' onClick={clickShowUserMenu}> New Admin</LinkRouter>
                    <LinkRouter to='auth/signup' onClick={signOutUser}> Sign Out</LinkRouter>
                </>
                :
                <>
                    <LinkRouter to='/' onClick={clickShowUserMenu}>{name}</LinkRouter>
                    <LinkRouter to='mytineraries/:id' onClick={clickShowUserMenu}> Mytinerary </LinkRouter>
                    <LinkRouter to='/help' onClick={signOutUser}> Sign Out </LinkRouter>
                </>
                }
            </>
            :
            <>
                <LinkRouter to='/' onClick={clickShowUserMenu}> Hello!</LinkRouter>
                <LinkRouter to='auth/signup' onClick={clickShowUserMenu}> Sign Up </LinkRouter>
                <LinkRouter to='auth/signin' onClick={clickShowUserMenu}> Sig In</LinkRouter>
            </>
            }
        </nav>
    );
}

export default UserMenu;