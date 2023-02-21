import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';
import { Emailform, State } from './Types/types';

const initialState: State = {
  emails: [],
  message: undefined,
};

export const addEmailss = createAsyncThunk('emails/add', (newEmail: Emailform) =>
  api.addEmail(newEmail)
);

const emailsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEmailss.fulfilled, (state, action) => {
        state.emails?.push(action.payload);
      })
      .addCase(addEmailss.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default emailsSlice.reducer;
