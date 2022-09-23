import React, {useState} from 'react';
import Comments from './DisplayComments';
import { useGetCommentsQuery } from '../features/commentAPI';
import Activities from './Activities';
import '../styles/Itinerary.css';
import { Link as LinkRouter } from 'react-router-dom';
import { useDeleteItineraryMutation } from '../features/itinerariesAPI'
import Likes from './Likes';
import Alert from './Alert'
export default function Itinerary(props) {

    const loggedIn = localStorage.getItem('client')
    const userLocal = JSON.parse(loggedIn)
    const itinerary = props.itinerary;
    const {data} = useGetCommentsQuery(itinerary._id)
    const [buttonState, setButtonState] = useState(false)
    const [deleteItinerary] = useDeleteItineraryMutation()
    

    const handleComment = () => {
        setButtonState(!buttonState);
    };

    const showComments = (dataResponse) => {
        if(dataResponse && dataResponse.length > 0){
            return dataResponse.map(comment => <Comments key={comment._id} id={comment._id} user={comment.user} comment={comment} />);
        } else {
            return (
                <h3 className='Itinerary-NotComment'>
                    <span>T</span><span>h</span><span>e</span><span>r</span><span>e</span><span> </span><span>a</span><span>r</span><span>e</span><span> </span><span>n</span><span>o</span><span> </span><span>c</span><span>o</span><span>m</span><span>m</span><span>e</span><span>n</span><span>t</span><span>s</span>
                </h3>
            );
        }
    };

    const confirmDeleteIt = (id) =>{
        const {error} = deleteItinerary(id);
        if(error){
            Alert("error",error.data.message);
        } else {
            Alert("success","Your itinerary has been deleted");
        }
    }

  return (
    <div className='Itinerary-container'>
        <div className='Itinerary-header'>
            <div className='Itinerary-userInfo Itinerary-header-firstElem'>
                <img className='Itinerary-userPhoto' src={itinerary.user.photo} alt='User'/>
                <p>{itinerary.user.name} {itinerary.user.lastName}</p>
            </div>
            <div className='Itinerary-userContainer Itinerary-header-secondElem'>
                <h2 className='Itinerary-username'>{itinerary.name}</h2>
                
            </div>
            
            {
                    loggedIn && ( ((JSON.parse(loggedIn)).role === "admin") || ((JSON.parse(loggedIn)).id === itinerary.user._id) )
                    ?
                    <div className='Itinerary-icons-config Itinerary-header-thirdElem'>
                        <LinkRouter to ={`/patchitineraries/${itinerary._id}`} className='tooltip-icons-edit Itinerary-icons-edit'>
                            <span className="tooltiptext">Edit Itinerary</span>
                            <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                        </LinkRouter>
                        <button type='submit' className='tooltip' onClick={() => confirmDeleteIt(itinerary._id)}>
                            <svg className="svgDelete" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 20 20" height="35" width="35">
                                <path fill="red" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clipRule="evenodd" fillRule="evenodd"></path>
                            </svg>
                            <span className="tooltiptext">Delete Itinerary</span>
                        </button>
                    </div>
                    :
                    null
            }
        </div>
        <div className='Itinerary-main'>
            <p className='Itinerary-price'>Price: ${itinerary.price}</p>
            <p>Duration: {itinerary.duration} hours</p>
            <Activities id={itinerary._id}/>
            <p className='Itinerary-tags'>{itinerary.tags}</p>
            <Likes user={userLocal} itinerary= {itinerary}/>
        </div>
        <section className='Itinerary-comments'>
            <button className='Itinerary-button-comment' onClick={handleComment}>
            <span>Comments</span></button>
            {
                buttonState
                ? 
                showComments(data.response)
                : 
                null
            }
        </section>
        

    </div>
  )
}