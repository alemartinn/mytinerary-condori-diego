import React from 'react';
import ButtonBack from '../components/ButtonBack';
import DetailsCard from '../components/DetailsCard';
import '../styles/DetailsCard.css'

const Details = () => {
    return (  
        <div className='detailsContainer'>
            <ButtonBack where={-1}/>
            <DetailsCard/>
        </div>
    );
}
 
export default Details;