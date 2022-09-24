import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import apiurl from '../api';

const activitiesAPI =  createApi({
    reducerPath: 'activitiesAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllActivities: builder.query({
            query: (id) => `/activities?itinerary=${id}`
        })
    })
});
export default activitiesAPI;
export const { useGetAllActivitiesQuery} = activitiesAPI;