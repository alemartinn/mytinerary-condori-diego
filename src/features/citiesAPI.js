import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import apiurl from '../api';

const citiesAPI = createApi({
    reducerPath: "citiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (inputCity) => `/cities/?city=${inputCity}`
        }),
        getOneCity: builder.query({
            query: (id) => `/cities/${id}`
        }),
        addNewCity: builder.mutation({
            query: (newCity) => ({
                url: `/cities`,
                method: 'POST',
                body: newCity
            })
        }),
        editCity: builder.mutation({
            query: ({ id, city }) => ({
                url: `/cities/${id}`,
                method: 'PATCH',
                body: city
            })
        }),
        deleteCity: builder.mutation({
            query: (city) => ({
                url: `/cities/${city._id}`,
                method: 'DELETE',
                body: city
            })
        }),
    }),
});


export default citiesAPI;
export const {useGetAllCitiesQuery, useGetOneCityQuery, useAddNewCityMutation, useEditCityMutation} = citiesAPI;