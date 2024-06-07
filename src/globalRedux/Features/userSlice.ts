'use client';

import { IJob } from '@/types/job.interface';
import { IUser } from '@/types/user.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dataFromStorage = localStorage.getItem('user');

// const initialState: Product[] = dataFromStorage
//   ? JSON.parse(dataFromStorage)
//   : [];

type State = {
  user: IUser | null
}

const initialState: State = {
  user: dataFromStorage
  ? JSON.parse(dataFromStorage)
  : null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<IUser | null>) => {
          state.user = action.payload;
        },
    }
})

export const { set } = userSlice.actions;

export default userSlice.reducer;