import React from 'react';
import '../styles/Activities.css';

const Activity = ({activt}) => {
    return (  
        <div className='cardActivity'>
            <p className='cardActivity-p'>{activt.name}</p>
            <div className='cardActivity-img'>
                <img src={activt.photo} alt={activt.name}/>
            </div>
        </div>
    );
}
 
export default Activity;