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

// Register new user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const ticketSlice = createSlice ({
    name: 'tickets',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {

    }
})

export const {reset} = ticketSlice.actions
export default ticketSlice.reducer