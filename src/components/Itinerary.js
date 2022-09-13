import React, {useState} from 'react';
import Comments from './Comments';
import Activities from './Activities'
import { useGetCommentsQuery } from '../features/commentAPI';
import '../styles/Itinerary.css';

export default function Itinerary(props) {
    const itinerary = props.itinerary
    const {data} = useGetCommentsQuery(itinerary._id)
    const [buttonState, setButtonState] = useState(false)
    const handleComment = () => {
        setButtonState(!buttonState)
    }

    const showComments = (dataResponse) => {
        if(dataResponse && dataResponse.length > 0){
            return dataResponse.map(comment => <Comments key={comment._id} comment={comment} />)
        } else {
            return (
            <h3 className='Itinerary-NotComment'>
                <span>T</span><span>h</span><span>e</span><span>r</span><span>e</span><span> </span><span>a</span><span>r</span><span>e</span><span> </span><span>n</span><span>o</span><span> </span><span>c</span><span>o</span><span>m</span><span>m</span><span>e</span><span>n</span><span>t</span><span>s</span>
            </h3>)
        }
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
            <button className='Itinerary-button-comment' onClick={handleComment}>
                <span>Comments</span></button>
        </div>

        {buttonState
        ? 
         showComments(data.response)
        : 
        null}
    </div>
  )
}