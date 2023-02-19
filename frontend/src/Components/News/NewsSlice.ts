/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';
import { State, OneNews, NewsId } from './Types/types';

const initialState: State = {
  news: [],
  error: undefined,
};

export const initNews = createAsyncThunk('news/load', () => api.loadNews());
export const addNews = createAsyncThunk('news/add', (newNews: OneNews) =>
  api.addNews(newNews)
);
export const deleteNews = createAsyncThunk('news/delete', (id: NewsId) =>
  api.delNews(id)
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initNews.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      .addCase(initNews.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addNews.fulfilled, (state, action) => {
        state.news.push(action.payload);
      })
      .addCase(addNews.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteNews.fulfilled, (state, action) => {
        const arr = state.news.filter((post) => post.id !== action.payload);
        state.news = arr;
        console.log(state.news);
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
