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
            <form className="form">
                <button>
                    <svg width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <input className="input" placeholder="Search a city" required="" type="text" value={inputCity} onChange={(e)=> handleInput(e)}/>
                <button className="reset" onClick={()=>inputCity("")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>

            { isSuccess && cities.response && cities.response.length>0
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
