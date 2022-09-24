import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import { useSignUpMutation } from '../features/authAPi';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const SignUpGoogle = () => {

    const Navigate = useNavigate();
    const [signUp] = useSignUpMutation();
    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        //response.credential is JWT (Json Web Token)
        let userObject = jose.decodeJwt(response.credential); //jose allows decode the response.

        let dataFromGoogle={
            name: userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            password: userObject.sub,
            role: 'user',
            from: 'google'
        }

        let {data, error} = await signUp(dataFromGoogle)
        if(error){
            Alert('error', error.data.message)
        } else if (!data.success) {
            Alert('error', data.message)
        }
        else {
            Alert('success', `Welcome to mytineraries ${data.response.name}`)
            Navigate("/");
        }
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "672542229320-98ea5mfnf8del0uobqtpn42f25av1n2t.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "outline", size: "large" }  // customization attributes
        );
    },)

    return (  
        <div>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default SignUpGoogle;