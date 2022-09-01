import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard';
import '../styles/Cities.css';
import axios from 'axios';

const Cities = () => {
    
    const [dataCities, setDataCities] = useState([]);
    const [inputCity, setInputCity] = useState('');

    const handleInput = (e) => {
        console.log(e.target.value);
        setInputCity(e.target.value);
    }
    
    useEffect(()=>{
        axios.get("http://localhost:4000/cities/?city="+inputCity)
            .then(response=> setDataCities(response.data.response))
            .catch(error => console.log(error));
    },[inputCity]);

    return (  
        <div className='citiesContainer'>
            <input 
                type='text' 
                className='Input-one cityInputFilter' 
                placeholder='Search a city by name: '
                value={inputCity} 
                onChange={(e)=> handleInput(e)}
            />

            {dataCities.length > 0 
            ?   <div className='citiesDataContainer'>
                    {dataCities.map((city, index) => <CityCard id={city._id} title={city.city} photo={city.photo} key={index} />)}
                </div> 
            :   <div className='noCitiesDataContainer'>
                    <p>We couldn't find cities with that name.</p>
                </div>
            }
            
        </div>
    );
}
 
export default Cities;