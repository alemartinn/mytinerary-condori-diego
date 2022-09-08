import React from 'react';
import '../styles/Activities.css';

const Activity = ({activt}) => {
    return (  
        <div className='activityContainer'>
            <p>Activity: {activt.name}</p>
            <span>Img:
                <img src={activt.photo} alt={activt.name}/>
            </span>
        </div>
    );
}
 
export default Activity;