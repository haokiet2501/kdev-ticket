import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from './noteService'

const initialState = {
    note: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

// Get user ticket
export const getNotes = createAsyncThunk(
    'notes/getAll',
    async (ticketId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await noteService.getNotes(ticketId, token)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message
            ) || error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            ..addCase(getTicket.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTicket.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.ticket = action.payload
            })
            .addCase(getTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = noteSlice.actions
export default noteSlice.reducer