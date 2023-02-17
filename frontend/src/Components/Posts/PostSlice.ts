/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';
import { State } from './Types/types';

const initialState: State = {
  posts: [],
  error: undefined,
};

export const initPosts = createAsyncThunk('posts/load', () => api.loadPosts());

const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(initPosts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
