import React from 'react';
import SignInGoogle from '../components/SignInGoogle';
import FormSignIn from '../components/FormSignIn';
import { Navigate } from 'react-router-dom';

const SignIn = () => {

    let userLocal = JSON.parse(localStorage.getItem("client"));
    let loggedInLocal;
    if (userLocal){
        loggedInLocal = userLocal.loggedIn;
    }

    return (  
        <>
            {
                loggedInLocal 
                ?
                <Navigate to="/" replace="true"/>
                :
                <div className='SignUp-container'>
                    <FormSignIn/>
                    <SignInGoogle/>
                </div>
            }
        </>
    )
}

export default SignIn;