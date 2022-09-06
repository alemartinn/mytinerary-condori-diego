import React, {useState, useEffect} from "react";
import axios from 'axios';
import Carousel from "./Carousel";
import apiurl from "../api";

function CityCarousel(){

    const [dataCities, setCities] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response=> setCities(response.data.response))
            .catch(error => console.log(error))
    },[])

    return(
        <Carousel data={dataCities} range={4} text='Popular MYtineraries' slides={3} interval={5}/>
    )
}

export {CityCarousel}