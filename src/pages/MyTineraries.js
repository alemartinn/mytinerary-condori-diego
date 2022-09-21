import React from 'react';
import Itineraries from '../components/Itineraries';
import { useGetAllItinerariesUserQuery } from '../features/itinerariesAPI';
//import {Link as LinkRouter} from 'react-router-dom'

const MyTineraries = () => {
    
    return (  
        <>
            {/* <div className='ButtonBackContainer'>
                <LinkRouter to='/newitinerary' className='Button'>New Itinerary</LinkRouter>
            </div> */}
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesUserQuery}/>
        </>
    );
}
 
export default MyTineraries;