import React from 'react';
import Comments from './Comments';
import { useGetCommentsQuery } from '../features/commentAPI';
import Activities from './Activities';
import '../styles/Itinerary.css';

export default function Itinerary(props) {
    const itinerary = props.itinerary;
    const {data} = useGetCommentsQuery(itinerary._id);

  return (
    <div className='Itinerary-container'>
        <div className='Itinerary-header'>
            <div className='Itinerary-userInfo'>
                <img className='Itinerary-userPhoto' src={itinerary.user.photo} alt='User'/>
                <p>{itinerary.user.name} {itinerary.user.lastName}</p>
            </div>
            <div className='Itinerary-userContainer'>
                <h2 className='Itinerary-Title'>{itinerary.name}</h2>
            </div>
        </div>
        <div className='Itinerary-main'>
                <p className='Itinerary-price'>Price: ${itinerary.price}</p>
            <Activities id={itinerary._id}/>
        </div>
        {data && data.response 
        ? 
        data.response.map(comment => <Comments key={comment._id} comment={comment} />)
        : 
        null
        }
    </div>
  )
}
