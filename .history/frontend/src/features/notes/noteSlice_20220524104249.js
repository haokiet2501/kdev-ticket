import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from './noteService'

const initialState = {
    note: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        reset: (state)
    }
})

export const {reset} = noteSlice.actions
export default noteSlice.reducer