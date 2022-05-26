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
            return await authService.register(user)
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message
            )
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