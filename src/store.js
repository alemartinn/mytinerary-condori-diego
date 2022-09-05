import { configureStore } from "@reduxjs/toolkit";

import citiesSlices from "./features/citiesSlices";

export default configureStore ({
    reducer: {
        cities: citiesSlices
    }
})