import React from 'react'
import { cities } from '../components/DataCity'
import CityCard from '../components/CityCard'
import '../styles/Cities.css'

const Cities = () => {
    
    return (  
        <div className='citiesContainer'>
            {cities.map(city =>{
                return <CityCard id={city._id} title={city.city} img={city.img} />
            })}
        </div>
    );
}
 
export default Cities;