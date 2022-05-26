import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from './ticketService'

const initialState = {
    tickets: [],
    ticket: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const ticketSlice = createSlice (
    name: 'tickets',
    initialState,
    reducers: {
        reset: 
    }
)