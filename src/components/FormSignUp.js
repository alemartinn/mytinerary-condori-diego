import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import InputMod from './InputMod';
import '../styles/SignUp.css'
import { useSignUpMutation } from '../features/authAPi';


const FormSignUp = (props) => {
    const [user, setUser] = useState({
        name: "", lastName: "", email: "", password: "", 
        country:"", role: props.role, from: "form"
    })
    const modelForm = [
        {name: 'name', type: 'text'},
        {name: 'lastName', type: 'text'},
        {name: 'photo', type: 'text'},
        {name: 'country', type: 'text'},
        {name: 'password', type: 'password'},
        {name: 'email', type: 'email'}
    ]

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
    )
    
    const handleChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    const [signUp] = useSignUpMutation()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(user)
        Navigate("/")
    }

    let Navigate = useNavigate()
    
  return (
        <form className='SignUp-form' onSubmit={handleSubmit}>
            {props.role === 'admin'
            ?
            <h2 className='Title-form'>New Admin</h2>
            :
            <h2 className='Title-form'>Sign Up</h2>
            }
            <div className='Inputs-form'>{modelForm.map(viewForm)}</div>
            <button className="icon-btn add-btn" type='submit'>
                <div className="add-icon"></div>
                <div className="btn-txt">Add Me</div>
            </button>
        </form>
  )
}

export default FormSignUp;