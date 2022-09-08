import React from 'react';
import { useGetAllActivitiesQuery } from '../features/activitiesAPI';
import Activity from './Activity';
import '../styles/Activities.css';

const Activities = ({id}) => {

    const {
        data: allActivities,
        isSuccess
    } = useGetAllActivitiesQuery(id);

    return (  
        <div className='activitiesContainer'>
            {
                isSuccess && allActivities.response
                ?
                allActivities.response.map((activt, index)=> <Activity activt={activt} key={index}/>)
                :
                
                <div className='noCitiesDataContainer'>
                    <p>No comments to show.</p>
                </div>
            }
        </div>
    );
}
 
export default Activities;