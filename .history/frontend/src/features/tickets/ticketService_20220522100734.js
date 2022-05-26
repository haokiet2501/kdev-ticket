import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from './ticketService'

const initialState = {
    tickets: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const getTicket = createAsyncThunk (
    'ticket/createTicket'
)