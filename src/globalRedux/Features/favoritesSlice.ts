'use client';

import { IJob } from '@/types/job.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dataFromStorage = localStorage.getItem('favorites');

const initialState: IJob[] = dataFromStorage
  ? JSON.parse(dataFromStorage)
  : [];

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        add: (favorites, action: PayloadAction<IJob>) => {
          favorites.push(action.payload);
        },
        remove: (favorites, action: PayloadAction<string>) => {
          return favorites.filter(job => job.job_id !== action.payload);
        },
    }
})

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;