import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
}

export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        console.log(user);
    }
)

export const login = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        console.log(user);
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})

export default authSlice.reducer