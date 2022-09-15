import {useState} from 'react';
import InputMod from '../components/InputMod';
import SignUpGoogle from '../components/SignUpGoogle';
import '../styles/SignUp.css'
import { useSignUpMutation } from '../features/authAPi';

const SignUp = () => {
    const [user, setUser] = useState({
        name: "", lastName: "", email: "", password: "", 
        country:"", role: "", from: "form"
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
            ...user, [e.target.name]: e.target.value, role: "user"
        })
    }

    //const [signUp] = useSignUpMutation()
    const handleSubmit = e => {
        e.preventDefault()
        //signUp(user)
        console.log(user);
    }

    return (  
        <div className='SignUp-container'>
            <form className='SignUp-form' onSubmit={handleSubmit}>
            <h2 className='Title-form'>Sign In</h2>
            <div className='Inputs-form'>{modelForm.map(viewForm)}</div>
            <button className="icon-btn add-btn" type='submit'>
                    <div className="add-icon"></div>
                    <div className="btn-txt">Add Me</div>
                </button>
            <SignUpGoogle/>
            </form>
        </div>
    );
}
 
export default SignUp;