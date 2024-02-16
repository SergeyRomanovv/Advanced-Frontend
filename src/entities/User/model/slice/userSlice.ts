import { createSlice } from '@reduxjs/toolkit';
import { userSchema } from '../types/user';

export interface CounterState {
  value: number
}

const initialState: userSchema = {

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
