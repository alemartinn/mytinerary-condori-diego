import React from 'react';
import { cities } from '../components/DataCity';
import '../styles/Cities.css'

const Cities = () => {
    
    const createCards = (city, index) => (
            <div className='cityCard' key={index}>
                <h3 >{city.city}</h3>
                <img src={city.img} alt={city.city} className='city-img'/>
            </div>
        )

    return (  
        <div className='citiesContainer'>
            {cities.map(createCards)}
        </div>
    );
}
 
export default Cities;