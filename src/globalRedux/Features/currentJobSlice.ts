'use client';

import { IJob } from '@/types/job.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dataFromStorage = localStorage.getItem('currentJob');

type State = {
  currentJob: IJob;
}

const initialState: State = {
  currentJob: dataFromStorage
  ? JSON.parse(dataFromStorage)
  : null
};

export const currentJobSlice = createSlice({
    name: 'currentJob',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<IJob>) => {
          state.currentJob = action.payload;
        },
    }
})

export const { set } = currentJobSlice.actions;

export default currentJobSlice.reducer;