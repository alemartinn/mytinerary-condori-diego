import React from 'react';
import { useGetAllActivitiesQuery } from '../features/activitiesAPI';
import Activity from './Activity';
import '../styles/Activities.css';

const Activities = ({id}) => {

    const {
        data: allActivities,
        isSuccess
    } = useGetAllActivitiesQuery(id);

    const showAllActivities = allActivitiesResponse => {
        return (
        <div className='activitiesContainer'>
            {allActivitiesResponse.map((activt, index)=> <Activity activt={activt} key={index}/>)}
        </div>
        )
    }

    return (  
        <>
            {
                isSuccess && allActivities.response && allActivities.response.length>0
                ?
                // allActivities.response.map((activt, index)=> <Activity activt={activt} key={index}/>)
                showAllActivities(allActivities.response)
                :
                null
            }
        </>
    );
}
 
export default Activities;