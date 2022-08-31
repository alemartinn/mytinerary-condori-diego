import React, { useState, useEffect } from 'react'
// import { cities } from '../components/DataCity'
import CityCard from '../components/CityCard'
import '../styles/Cities.css'
import axios from 'axios'

const Cities = () => {
    
    const [dataCities, setCities] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response=> setCities(response.data.response))
            .catch(error => console.log(error))
    },[])

    return (  
        <div className='citiesContainer'>
            {dataCities.map((city, index) => <CityCard id={city._id} title={city.city} img={city.img} key={index} />)}
        </div>
    );
}
 
export default Cities;