import React from 'react'
import '../styles/Itinerary.css'
import Activities from './Activities'

export default function Itinerary(props) {
    const itinerary = props.itinerary
  return (
    <div className='Itinerary-container'>
        <h2 className='Itinerary-Title'>{itinerary.name}</h2>
        <div className='Itinerary-userContainer'>
            <img className='Itinerary-userPhoto' src={itinerary.user.photo} alt={itinerary.name}/>
            <div className='Itinerary-userInfo'>
                <p>{itinerary.user.name} {itinerary.user.lastName}</p>
            </div>
        </div>
        <div className='Itinerary-infoContainer'>
            <p>Price: ${itinerary.price}</p>
            <Activities id={itinerary._id}/>
        </div>
    </div>
  )
}
