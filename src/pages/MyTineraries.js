import React from 'react';
import Itineraries from '../components/Itineraries';
import { useGetAllItinerariesUserQuery } from '../features/itinerariesAPI';

const MyTineraries = () => {
    
    return (  
        <>
            <Itineraries useGetAllItinerariesQuery={useGetAllItinerariesUserQuery}/>
        </>
    );
}
 
export default MyTineraries;