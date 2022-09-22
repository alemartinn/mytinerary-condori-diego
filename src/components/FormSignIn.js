import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import InputMod from './InputMod';
import '../styles/SignUp.css'
import { useSignInMutation } from '../features/authAPi';
import Swal from 'sweetalert2';

const FormSignIn = () => {

    const [user, setUser] = useState({
        email: "", password: "", from: "form"
    });

    const modelForm = [
        {name: 'email', type: 'email'},
        {name: 'password', type: 'password'}
    ];

    let Navigate = useNavigate();

    const viewForm = (elem, index) => (
        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type}
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    );
    
    const handleChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    };

    const [signIn] = useSignInMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        let {data, error} = await signIn(user);
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
    };
    
  return (
        <form className='SignUp-form' onSubmit={handleSubmit}>
            <h2 className='Title-form'>Sign In</h2>
            <div className='Inputs-form'>{modelForm.map(viewForm)}</div>
            <button className="icon-btn add-btn" type='submit'>
                <div className="add-icon"></div>
                <div className="btn-txt">Log In</div>
            </button>
        </form>
  )
}

export default FormSignIn;