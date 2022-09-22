import React, { useEffect, useRef } from 'react';
import * as jose from 'jose';
import { useSignUpMutation } from '../features/authAPi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

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
        try{
            // await axios.post(apiurl+'/auth/signup', data)
            let {data, error} = await signUp(dataFromGoogle)
        if(error){
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.data.response.details[0].message}`
              })
        } else if (!data.success) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${data.message} with that email`
              })
        }
        else {
            await Swal.fire({
                icon: 'success',
                title: `Welcome to mytineraries ${data.response.name} !`,
                text: `Now you can sign in with your account.`
              })
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