import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cities.css';

const CityCard = (props) => {
    return (
        <div className='cityCard' key={props.id}>
            <h3>{props.title}</h3>
            <Link to={`/details/${props.id}`}>
                <img src={props.photo} alt={props.city} className='city-img'/>
            </Link>
        </div>
    )
}
 
export default CityCard;