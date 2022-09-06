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
        })
    }),
})

export default citiesAPI;
export const {useGetAllCitiesQuery, useGetOneCityQuery} = citiesAPI;