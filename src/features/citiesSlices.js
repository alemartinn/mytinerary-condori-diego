import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name : 'cities',
    initialState:{ //values
        cities: []
    },
    reducers: { //functions
        fetchFromServer : (state) => [
            {
                id: "63111875cab0da4e5c0a2bc0",
                city: "Montevideo",
                country: "Uruguay",
                photo: "https://images6.alphacoders.com/552/552839.jpg",
                population: 12345,
                fundation: 1000,
                __v: 0
            }
        ]
    }
})

export const {fetchFromServer} = citiesSlice.actions

export default citiesSlice.reducer