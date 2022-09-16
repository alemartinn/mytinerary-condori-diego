import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import apiurl from "../api";

const commentsAPI =  createApi({
    reducerPath: 'commentsAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `/comments?itinerary=${id}`
        }),
        editComment: builder.mutation({
            query:(id, comment) => ({
                url:`/comments/${id}`,
                method: 'PATCH',
                body: comment
            })
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            })
        })
    })
})
export default commentsAPI
export const {useGetCommentsQuery, useEditCommentMutation, useDeleteCommentMutation} = commentsAPI