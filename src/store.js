import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import citiesSlices from "./features/citiesSlices";
import itinerariesAPI from "./features/itinerariesAPI";

export default configureStore ({
    reducer: {
        cities: citiesSlices,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesAPI.middleware).concat(itinerariesAPI.middleware)
})