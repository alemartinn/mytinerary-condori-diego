import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import { useSignInMutation } from '../features/authAPi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUpGoogle = () => {

    const Navigate = useNavigate();
    const buttonDiv = useRef(null);
    const [signIn] = useSignInMutation();

    async function handleCredentialResponse(response){
        //response.credential is JWT (Json Web Token)
        let userObject = jose.decodeJwt(response.credential); //jose allows decode the response.

        let dataFromGoogle={
            email: userObject.email,
            password: userObject.sub,
            from: 'google'
        }
        
        try{
            const {data, error} = signIn(dataFromGoogle);
            if(error){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.data.message}`
                  });
            } else {
                localStorage.setItem("client", JSON.stringify(data.response.user));
                localStorage.setItem("token", JSON.stringify(data.response.token));
                await Swal.fire({
                    icon: 'success',
                    title: `Welcome to mytineraries ${data.response.user.name} !`,
                    text: `You logged succesfully.`
                  });
                Navigate("/");
            }

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