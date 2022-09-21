import React from 'react';
import ButtonBack from '../components/ButtonBack';
import DetailsCard from '../components/DetailsCard';
import Itineraries from '../components/Itineraries';
import {Link as LinkRouter, useParams} from 'react-router-dom'
import { useGetAllItinerariesCityQuery } from '../features/itinerariesAPI';
import '../styles/DetailsCard.css'

const Details = () => {
    const client = localStorage.getItem("client")
 
    const {id} = useParams()
    return (  
        <div className='detailsContainer'>
            <div className='Details-buttons'>
            <ButtonBack where={-1}/>
            {client?
             <div className='ButtonBackContainer'>
                 <LinkRouter to={`/newitinerary/${id}`} className='Button'>New Itinerary</LinkRouter>
             </div>
            : null
            }
            </div>
            <DetailsCard/>
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesCityQuery}/>
        </div>
    );
}
 
export default Details;