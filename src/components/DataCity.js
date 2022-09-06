import React from 'react'
import Carousel from "./Carousel";
import {useGetAllCitiesQuery} from '../features/citiesAPI';

function CityCarousel(){

    const { 
        data: cities,
        isSuccess
    } = useGetAllCitiesQuery('');

    return(
        <>
            {
                isSuccess 
                ?
                <Carousel data={cities.response} range={4} text='Popular MYtineraries' slides={3} interval={5}/>
                :
                <div className='noCitiesDataContainer'>
                    <p>No images to show.</p>
                </div>
            }
        </>
    )
}

export {CityCarousel}