import React from 'react'
import Itinerary from './Itinerary'
import '../styles/Itineraries.css'
import { useParams } from "react-router-dom";

export default function Itineraries({useGetAllItinerariesQuery}) {
  let {id} = useParams();
  const {data:objetItineraries, isSuccess } = useGetAllItinerariesQuery(id)

  return (
    <div className='Itineraries-Container'>
        {isSuccess && objetItineraries.response && (objetItineraries.response).length > 0
        ?
        objetItineraries.response.map(itinerary => <Itinerary key={itinerary._id} itinerary={itinerary}/>)
        :
        <div className='noCitiesDataContainer'>
            <p>There isn't itineraries to show</p>
        </div>
        }
    </div>
  )
}
