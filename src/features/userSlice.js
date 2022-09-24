import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {u: null},
    reducers: {
        //action = {type, payload}
        addUser: (state, action) => {
            state.u = action.payload
        },
        removeUser: (state, action) => {
            state.u = null
        }
    }
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer