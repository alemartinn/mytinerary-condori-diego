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
        signIn: builder.mutation({
            query: (user) => ({
                url: `/auth/signin`,
                method: 'POST',
                body: user
            })
        }),
        signOut: builder.mutation({
            query: (user) => ({
                url: `/auth/signout`,
                method: 'POST',
                body: user
            })
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/auth/updateuser/${user.idUser}`,
                method: 'PATCH',
                body: user.editUser
            })
        })
    })
});

export const {useSignUpMutation, useSignInMutation, useSignOutMutation ,useUpdateUserMutation} = authAPI;