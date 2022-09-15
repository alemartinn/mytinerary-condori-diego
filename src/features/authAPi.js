import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import apiurl from "../api";

export const authAPI = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (user) => ({
                url: `/auth/signup`,
                method: 'POST',
                body: user
            })
        }),
    })
})
export const {useSignUpMutation} = authAPI