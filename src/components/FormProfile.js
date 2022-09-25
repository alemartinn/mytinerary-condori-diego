import React, { useState, useEffect } from 'react';
import { useUpdateUserMutation } from '../features/authAPi';
import Alert from './Alert';
import InputMod from './InputMod';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';

const FormProfile = () => {

    const dispatch = useDispatch();
    const userRedux = useSelector(state => state.user.u);
    const [editUser, setEditUser] = useState();
    const [updateUser] = useUpdateUserMutation();

    const [modelF, editModelF] = useState([
        {name: 'name', type: 'text', defaultValue: ''},
        {name: 'lastname', type: 'text', defaultValue: ''},
        {name: 'photo', type: 'url', defaultValue: ''},
        {name: 'country', type: 'text', defaultValue: ''},
        {name: 'password', type: 'password', defaultValue: ''}
    ]);

    useEffect(()=>{
        if (userRedux){
            editModelF([
                {name: 'name', type: 'text', defaultValue: userRedux.name},
                {name: 'lastname', type: 'text', defaultValue: userRedux.lastName},
                {name: 'photo', type: 'url', defaultValue: userRedux.photo},
                {name: 'country', type: 'text', defaultValue: userRedux.country},
                {name: 'password', type: 'password', defaultValue: ''}
            ]);
            setEditUser({
                name: userRedux.name,
                lastName: userRedux.lastName,
                photo: userRedux.photo,
                country: userRedux.country,
                email: userRedux.email, 
                role: userRedux.role, 
                from: userRedux.from[0]
            });
        }
    },[userRedux]);
    
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
                autoComplete="on"
            />
            <label className='form__label' htmlFor={elem.name}>{elem.name}</label>
        </div>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await updateUser({editUser: editUser, idUser: userRedux.id});
        if(error){
            Alert("error",error.data.message);
        } else {
            dispatch(addUser(data.response));
            localStorage.setItem("token", JSON.stringify(data.response.token));
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