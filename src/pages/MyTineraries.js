import React from 'react';
import Itineraries from '../components/Itineraries';
import { useGetAllItinerariesUserQuery } from '../features/itinerariesAPI';


const MyTineraries = () => {
    
    return (  
        <div className='MyTineraries-container'>
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesUserQuery}/>
        </div>
    );
}
 
export default MyTineraries;