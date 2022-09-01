import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const DetailsCard = () => {

  let {id} = useParams();

  const [dataCity, setCity] = useState();

  useEffect(()=>{
      axios.get('http://localhost:4000/cities/?id='+id)
          .then(response=> setCity(response.data.response))
          .catch(error => console.log(error))
  },[id])


  return ( 
    <>
      {dataCity 
      ? 
      <div className='detailsCardContainer'>
          <h2>City: {dataCity[0].city}</h2>
          <p>Country: {dataCity[0].country}</p>
          <img src={dataCity[0].photo} alt={dataCity[0].city}></img>
          <p>Population: {dataCity[0].population}</p>
          <p>Fundation: {new Date(dataCity[0].fundation).getFullYear()}</p>
      </div>
      : 
      <div>
          <h2>There isn't city to show</h2>
      </div>
      }
    </>
  );
}
 
export default DetailsCard;
