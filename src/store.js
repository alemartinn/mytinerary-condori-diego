import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import citiesSlices from "./features/citiesSlices";

export default configureStore ({
    reducer: {
        cities: citiesSlices,
        [citiesAPI.reducerPath] : citiesAPI.reducer
    }
})