import React from 'react'
import '../styles/Itinerary.css'

export default function Itinerary(props) {
    const itinerary = props.itinerary
  return (
    <div className='Itinerary-container'>
        <h2>{itinerary.name}</h2>
        <div className='Itinerary-userContainer'>
            <img src={itinerary.user.photo}/>
            <div className='Itinerary-userInfo'>
                <p>{itinerary.user.name} {itinerary.user.lastName}</p>
            </div>
        </div>
        <div className='Itinerary-infoContainer'>
            <p>{itinerary.city.city}</p>
            <p>{itinerary.price}</p>
            <p>{itinerary.duration}</p>
        </div>
    </div>
  )
}
