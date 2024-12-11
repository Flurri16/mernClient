import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios.js";
const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, password}, {rejectWithValue}) => {
        try {
            const {data} = await axios.post('/auth/register', {username, password})

            if(data.token) window.localStorage.setItem('token', data.token)
            
            return data

        } catch (err) {
            console.log(err)
            return rejectWithValue(err.response?.data || { message: "Some error registration" })
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser', 
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', { username, password });
            if (data.token) {
                window.localStorage.setItem('token', data.token);
            }
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: "Unknown error occurred" });
        }
    }
);

export const getMe = createAsyncThunk(
    'auth/getMe', 
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/auth/me');
            return data;
        } catch (err) {
            return rejectWithValue(err.response?.data || { message: "Unauthorized" });
        }
    }
);


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })   
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message || "Registration failed";
            })
            
            
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message || "Login failed";})

            

            .addCase(getMe.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = null;
                state.user = action.payload?.user;
                state.token = action.payload?.token;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.payload?.message || "Unable to fetch user data";})
        }
})
export const checkIsAuth = state => Boolean(state.auth.token)
export const {logout} = authSlice.actions
export default authSlice.reducer