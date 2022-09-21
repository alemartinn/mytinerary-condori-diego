import React, { useState, useEffect } from 'react';
import { useGetOneItineraryQuery } from '../features/itinerariesAPI';

const PatchItinerary = ({idCity}) => {

    const {data} = useGetOneItineraryQuery(idCity);


    const [editItinerary, setEditItinerary] = useState({
        name: "", 
        user: JSON.parse(localStorage.getItem('client')), 
        city: idCity, 
        price: "", 
        likes: [],
        tags:[], 
        duration: ""
    })

    const modelForm = [
        {name: 'name', type: 'text'},
        {name: 'price', type: 'text'},
        {name: 'tags', type: 'text'},
        {name: 'duration', type: 'number'}
    ]

    useEffect(()=>{
        console.log(data)
    },[data])

    return (  
        <>
            { data ? 
            <p>Dataaaa</p>
            : 
            <p>ERRORRR</p>
            }
        </>
    );
}
 
export default PatchItinerary;