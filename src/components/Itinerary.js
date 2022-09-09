import React from 'react';
import Comments from './Comments';
import { useGetCommentsQuery } from '../features/commentAPI';
import '../styles/Itinerary.css';
import Activities from './Activities'

export default function Itinerary(props) {
    const itinerary = props.itinerary
    const {data} = useGetCommentsQuery(itinerary._id)
    if(data){
        console.log(data)
    }
  return (
    <div className='Itinerary-container'>
        <h2 className='Itinerary-Title'>{itinerary.name}</h2>
        <div className='Itinerary-userContainer'>
            <img className='Itinerary-userPhoto' src={itinerary.user.photo} alt='User'/>
            <div className='Itinerary-userInfo'>
                <p>{itinerary.user.name} {itinerary.user.lastName}</p>
            </div>
        </div>
        <div className='Itinerary-infoContainer'>
            <p>Price: ${itinerary.price}</p>
            <Activities id={itinerary._id}/>
        </div>
        {data && data.response 
        ? 
        data.response.map(comment => <Comments key={comment._id} comment={comment} />)
        : 
        <h3 className='Itinerary-NotComment'>There are no comments</h3>}
    </div>
  )
}
