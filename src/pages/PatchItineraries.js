import React from 'react';
import { useParams } from 'react-router-dom';
import PatchItinerary from '../components/PatchItinerary';

const PatchItineraries = () => {

    const {id} = useParams();

    return (  
        <>
            <PatchItinerary idCity={id}/>
        </>
    );
}
 
export default PatchItineraries;