import React from 'react';
import { useParams } from 'react-router-dom';
import FormProfile from '../components/FormProfile';
import '../styles/Profile.css'

const Profile = () => {

    const {id} = useParams();
    
    const clientLS = localStorage.getItem('client');
    let client;
    if (clientLS){
        client = JSON.parse(clientLS);
    }

    return (
        <>
            {
                client.id === id 
                ?
                <FormProfile/>
                :
                <div className='Profile-container'>
                    <h2>This isn't your profile.</h2>
                </div>
            }
        </>
    );
}

export default Profile;