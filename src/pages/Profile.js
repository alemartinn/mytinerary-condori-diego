import React from 'react';
import { useParams } from 'react-router-dom';
import FormProfile from '../components/FormProfile';
import { useSelector } from 'react-redux';
import '../styles/Profile.css'

const Profile = () => {

    const {id} = useParams();
    const userRedux = useSelector(state => state.user.u);

    return (
        <>
            {
                userRedux.id === id 
                ?
                <FormProfile/>
                :
                <div className='Profile-container'>
                    <h2>Stalker.</h2>
                </div>
            }
        </>
    );
}

export default Profile;