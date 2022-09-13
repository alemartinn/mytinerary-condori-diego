import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';

const SignUpGoogle = () => {

    const buttonDiv = useRef(null);

    async function handleCredentialResponse(response){
        console.log(response.credential); //JWT Json Web Token
        let userObject = jose.decodeJwt(response.credential); //jose allows decode the response.
        console.log(userObject);

        let data={
            name: userObject.name,
            photo: userObject.photo,
            mail: userObject.mail,
            password: userObject.password,
            role: 'user',
            from: 'google'
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
        { theme: "outline", size: "large" }  // customization attributes
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