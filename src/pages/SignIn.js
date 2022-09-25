import React from 'react';
import SignInGoogle from '../components/SignInGoogle';
import FormSignIn from '../components/FormSignIn';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = () => {

    const userRedux = useSelector(state => state.user.u);

    return (
        <>
            {
                userRedux 
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