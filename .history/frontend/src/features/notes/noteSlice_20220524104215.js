import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from './noteService'

const initialState = {
    note: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ''
}

export const 

export const {reset} = noteSlice.actions
export default noteSlice.reducer