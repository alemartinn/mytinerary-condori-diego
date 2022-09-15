import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import axios from 'axios';
import apiurl from '../api';

const SignUpGoogle = () => {

    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        //response.credential is JWT (Json Web Token)
        let userObject = jose.decodeJwt(response.credential); //jose allows decode the response.

        let data={
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        console.log(data);
        try{
            await axios.post(apiurl+'/auth/signin', data)
        } catch(error){
            console.log(error)
        }
        //newUser(data)
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "672542229320-98ea5mfnf8del0uobqtpn42f25av1n2t.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "outline", size: "medium" }  // customization attributes
        );
        //google.accounts.id.prompt();
    },[])

    return (  
        <div>
            <div ref={buttonDiv}></div>
        </div>
    );
}
 
export default SignUpGoogle;