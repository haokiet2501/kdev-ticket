import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import noteService from './noteService'

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: false
}