import React, { useState } from 'react';
import CityCard from '../components/CityCard';
import '../styles/Cities.css';
import { useGetAllCitiesQuery } from '../features/citiesAPI';

const Cities = () => {
    
    const [inputCity, setInputCity] = useState('');

    const handleInput = (e) => {
        setInputCity(e.target.value);
    }

    const { 
        data: cities,
        isSuccess
    } = useGetAllCitiesQuery(inputCity);
    
    return (  
        <div className='citiesContainer'>
            <input 
                type='text' 
                className='Input-one cityInputFilter' 
                placeholder='Search a city by name: '
                value={inputCity} 
                onChange={(e)=> handleInput(e)}
            />

            { isSuccess
            ?   <div className='citiesDataContainer'>
                    {cities.response.map((city, index) => <CityCard id={city._id} title={city.city} photo={city.photo} key={index} />)}
                </div> 
            :   <div className='noCitiesDataContainer'>
                    <p>We couldn't find cities with that name.</p>
                </div>
            }
            
        </div>
    );
}
 
export default Cities;