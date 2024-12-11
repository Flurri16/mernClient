import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Импортируем редьюсер, а не весь объект authSlice
import postSlice  from './postSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer, // Используем authReducer
        post: postSlice
    }
});
