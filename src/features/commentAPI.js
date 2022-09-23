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
        createComment: builder.mutation({
            query:(newComment) => ({
                url:`/comments`,
                method: 'POST',
                body: newComment,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        editComment: builder.mutation({
            query:(editedComment) => ({
                url:`/comments/${editedComment.id}`,
                method: 'PATCH',
                body: editedComment.comment,
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
                headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
            })
        }),
    })
})
export default commentsAPI
export const {useGetCommentsQuery, useEditCommentMutation, useDeleteCommentMutation, useCreateCommentMutation} = commentsAPI