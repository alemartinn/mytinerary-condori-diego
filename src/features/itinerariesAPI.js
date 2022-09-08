import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from '../api';

const itinerariesAPI =  createApi({
    reducerPath: 'itinerariesAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllItineraries: builder.query({
            query: (id) => `/itineraries?city=${id}`
        }),
        getAllItinerariesUser: builder.query({
            query: (id) => `/itineraries?user=${id}`
        }),
    })
})
export default itinerariesAPI
export const {useGetAllItinerariesQuery, useGetAllItinerariesUserQuery} = itinerariesAPI;