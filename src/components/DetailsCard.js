import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetOneCityQuery } from '../features/citiesAPI';

const DetailsCard = () => {

  let {id} = useParams();
  const { 
    data: dataCity, 
    isSuccess, 
} = useGetOneCityQuery(id);

  return ( 
    <>
      { isSuccess 
      ? 
      <div className='detailsCardContainer'>
          <h2>City: {dataCity.response.city}</h2>
          <p>Country: {dataCity.response.country}</p>
          <img src={dataCity.response.photo} alt={dataCity.response.city}></img>
          <p>Population: {dataCity.response.population}</p>
          <p>Fundation: {new Date(dataCity.response.fundation).getFullYear()}</p>
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
