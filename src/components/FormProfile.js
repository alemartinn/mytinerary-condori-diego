import React, { useState, useEffect } from 'react';
import { useUpdateUserMutation } from '../features/authAPi';
import Alert from './Alert';
import InputMod from './InputMod';

const FormProfile = () => {

    const [userData, setUserData] = useState();
    const [editUser, setEditUser] = useState();
    const [updateUser] = useUpdateUserMutation();

    useEffect(()=>{
        let dataLS = localStorage.getItem('client');
        if (dataLS){
            let data = JSON.parse(dataLS);
            setUserData(data);
        }
    },[]);


    const [modelF, editModelF] = useState([
        {name: 'name', type: 'text', defaultValue: ''},
        {name: 'lastname', type: 'text', defaultValue: ''},
        {name: 'photo', type: 'url', defaultValue: ''},
        {name: 'country', type: 'text', defaultValue: ''},
        {name: 'password', type: 'password', defaultValue: ''}
    ]);

    useEffect(()=>{
        if (userData){
            editModelF([
                {name: 'name', type: 'text', defaultValue: userData.name},
                {name: 'lastname', type: 'text', defaultValue: userData.lastName},
                {name: 'photo', type: 'url', defaultValue: userData.photo},
                {name: 'country', type: 'text', defaultValue: userData.country},
                {name: 'password', type: 'password', defaultValue: ''}
            ]);
            setEditUser({
                name: userData.name,
                lastName: userData.lastName,
                photo: userData.photo,
                country: userData.country,
                email: userData.email, 
                role: userData.role, 
                from: userData.from[0]
            });
        }
    },[userData]);
    
    const handleChange = e => {
        setEditUser({
            ...editUser, [e.target.name]: e.target.value
        });
    };

    const viewForm = (elem, index) => (
        <div className='form__group field' key={index}>
            <InputMod 
                className='form__field'
                name={elem.name} 
                type={elem.type}
                defaultValue = {elem.defaultValue}
                required
                onChange={handleChange}
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await updateUser({editUser: editUser, idUser: userData.id});
        if(error){
            console.log(error.data.message)
            Alert("error",error.data.message)
        } else {
            localStorage.removeItem("client");
            localStorage.setItem("client", JSON.stringify(data.response));
            // localStorage.setItem("token", JSON.stringify(data.response.token));
            Alert("success",data.message)
        }
    };

    return (  
        <div className='NewItyn-container'>
        <form className='NewItin-form' onSubmit={handleSubmit}>
        <h2 className='Title-form'>Edit Profile</h2>
        <div className='Inputs-form'>{modelF.map(viewForm)}</div>
        <button className="icon-btn add-btn" type='submit'>
            <div className="add-icon"></div>
            <div className="btn-txt">Edit</div>
        </button>
        </form>
    </div>
    );
}

export default FormProfile;