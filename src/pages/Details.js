import React from 'react';
import ButtonBack from '../components/ButtonBack';
import DetailsCard from '../components/DetailsCard';
import Itineraries from '../components/Itineraries';
import '../styles/DetailsCard.css'

const Details = () => {
    return (  
        <div className='detailsContainer'>
            <ButtonBack where={-1}/>
            <DetailsCard/>
            <Itineraries/>
        </div>
    );
}
 
export default Details;