import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../axios.js'
const initialState = {
    posts: [],
    popularPosts: [],
    loading: false
}

export const createPost = createAsyncThunk('post/createPost',
    async (params) => {
        try {
            const {data} = await axios.post('/posts', params)
            return data
        } catch(e) {
            console.log(e)
        }
    }
)

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    // extraReducers: {}
})

export default postSlice.reducer