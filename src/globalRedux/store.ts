'use client';
import currentJobReducer from './Features/currentJobSlice';
import userReducer from './Features/userSlice';
import favoritesReducer from './Features/favoritesSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        currentJob: currentJobReducer,
        user: userReducer,
        favorites: favoritesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;