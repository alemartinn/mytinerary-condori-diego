import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from '../api';

const itinerariesAPI =  createApi({
    reducerPath: 'itinerariesAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllItinerariesCity: builder.query({
            query: (id) => `/itineraries?city=${id}`
        }),
        getAllItinerariesUser: builder.query({
            query: (id) => `/itineraries?user=${id}`
        }),
        getOneItinerary: builder.query({
            query: (id) => `itineraries/${id}`
        }),
        addNewItinerary: builder.mutation({
            query:(newItinerary) => ({
                url:`/itineraries`,
                method: 'POST',
                body: newItinerary
            })
        }),
    })
})
export default itinerariesAPI
export const {useGetOneItineraryQuery, useGetAllItinerariesCityQuery, useGetAllItinerariesUserQuery,useAddNewItineraryMutation} = itinerariesAPI;