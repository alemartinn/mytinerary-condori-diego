import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
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
            query: (id) => `/itineraries/${id}`
        }),
        addNewItinerary: builder.mutation({
            query:(newItinerary) => ({
                url:`/itineraries`,
                method: 'POST',
                body: newItinerary
            })
        }),
        updateItinerary: builder.mutation({
            query:(itinerary) => ({
                url: `/itineraries/${itinerary.id}`,
                method: 'PATCH',
                body: itinerary.editItinerary
            })
        }),
        deleteItinerary: builder.mutation({
            query:(id) => ({
                url: `/itineraries/${id}`,
                method: 'DELETE',
            })
        }),
        likeDislike: builder.mutation({
            query:(id) => ({
                url: `/itineraries/like/${id}`,
                method: 'PATCH',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
    })
});
export default itinerariesAPI;
export const {useGetOneItineraryQuery, useGetAllItinerariesCityQuery, useGetAllItinerariesUserQuery, useAddNewItineraryMutation, useUpdateItineraryMutation, useDeleteItineraryMutation, useLikeDislikeMutation} = itinerariesAPI;