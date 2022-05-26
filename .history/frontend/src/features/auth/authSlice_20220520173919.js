import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
}

// Register new user
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await 
        } catch (error) {
            
        }
    }
)

// Login user
export const login = createAsyncThunk(
    'auth/login',
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