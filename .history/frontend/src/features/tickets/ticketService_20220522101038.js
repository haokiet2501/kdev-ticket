import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import { authSlice } from '../auth/authSlice'
import ticketService from './ticketService'

const initialState = {
    tickets: [],
    ticket: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const ticketSlice = createSlice ({
    name: 'tickets',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

    }
})

export const reset = ticket
export default ticketSlice.reducer