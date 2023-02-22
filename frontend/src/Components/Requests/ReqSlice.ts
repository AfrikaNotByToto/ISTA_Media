/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api/api';
import { State } from './Types/types';

const initialState: State = {
  requests: [],
};

export const initReqs = createAsyncThunk('requests/init', () => api.loadReq());

const reqsSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initReqs.fulfilled, (state, action) => {
      state.requests = action.payload;
    });
  },
});

export default reqsSlice.reducer;
