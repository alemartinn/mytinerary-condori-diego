import React, { useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { useSignOutMutation } from '../../features/authAPi';
import '../../styles/Header/UserMenu.css';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../features/userSlice';


const UserMenu = ({showUserMenu, clickShowUserMenu}) => {
    
    const dispatch = useDispatch();
    const userRedux = useSelector(state => state.user.u);
    const [signOut] = useSignOutMutation();

    useEffect(() => {
        let headerUserMenu = document.getElementById('HeaderUserMenu')
        showUserMenu ? headerUserMenu.style.right='0' : headerUserMenu.style.right='-200px'
    },[showUserMenu]);

    const signOutUser = async (e) => {

        let {error} =await signOut({email : userRedux.email});
        
        if(error){
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `You couldn't sign out correctly, please try it again!`
              });
        } else {
            dispatch(removeUser(null))
            Swal.fire({
                icon: 'success',
                title: `See you soon ${userRedux.name} !`,
                text: `You logged out succesfully.`
            });
        }
        clickShowUserMenu()
        localStorage.removeItem("client")
        localStorage.removeItem("token")
        // Navigate("/")
    }

    return (  
        <nav className='HeaderUserMenu' id='HeaderUserMenu'>
            {userRedux 
            ?
            <>
                {(userRedux.role === "admin")?
                <>
                    <LinkRouter to={`/profile/${userRedux.id}`} onClick={clickShowUserMenu}><b>{userRedux.name}</b></LinkRouter>
                    <LinkRouter to='auth/signup' onClick={clickShowUserMenu}> New Admin </LinkRouter>
                    <LinkRouter to='/' onClick={signOutUser}> Sign Out </LinkRouter>
                </>
                :
                <>
                    <LinkRouter to={`/profile/${userRedux.id}`} onClick={clickShowUserMenu}><b>{userRedux.name}</b></LinkRouter>
                    <LinkRouter to={`mytineraries/${userRedux.id}`} onClick={clickShowUserMenu}> MyTinerary </LinkRouter>
                    <LinkRouter to='/' onClick={signOutUser}> Sign Out </LinkRouter>
                </>
                }
            </>
            :
            <>
                <LinkRouter to='/' onClick={clickShowUserMenu}><b> Hello! </b></LinkRouter>
                <LinkRouter to='auth/signup' onClick={clickShowUserMenu}> Sign Up </LinkRouter>
                <LinkRouter to='auth/signin' onClick={clickShowUserMenu}> Sign In </LinkRouter>
            </>
            }
        </nav>
    );
}

export default UserMenu;