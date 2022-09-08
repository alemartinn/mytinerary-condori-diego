import React from 'react'
import Itinerary from './Itinerary'
import { useGetAllItinerariesQuery } from '../features/itinerariesAPI'
import '../styles/Itineraries.css'
import { useParams } from "react-router-dom";


export default function Itineraries() {
  let {id} = useParams();
  const {data:objetItineraries, isSuccess } = useGetAllItinerariesQuery(id)

  return (
    <div className='Itineraries-Container'>
        {isSuccess && objetItineraries.response
        ?
        objetItineraries.response.map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary}/>)
        :null
        }
    </div>
  )
}
