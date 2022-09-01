import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/ButtonBack.css'

const ButtonBack = ({where}) => {
    const navigate = useNavigate();

    return (
        <div className='ButtonBackContainer'>
            <button className='Button' onClick={() => navigate(where)}>BACK</button>
        </div>
    );
}
export default ButtonBack;