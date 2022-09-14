import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import commentsAPI from "./features/commentAPI";
import itinerariesAPI from "./features/itinerariesAPI";
import activitiesAPI from "./features/activitiesAPI";

export default configureStore ({
    reducer: {
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [commentsAPI.reducerPath] : commentsAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware).concat(itinerariesAPI.middleware).concat(activitiesAPI.middleware).concat(commentsAPI.middleware)
})