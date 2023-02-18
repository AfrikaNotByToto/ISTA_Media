import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as apiUser from '../../App/apiUser';

import { State, User } from './Types/types';

const initialState: State = {
  user: {},
  message: undefined,
};

export const registrUser = createAsyncThunk('user/registr', (newUser: User) =>
  apiUser.regUser(newUser)
);

export const loginUser = createAsyncThunk('user/login', (users: User) =>
  apiUser.loginUser(users)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registrUser.fulfilled, (state: State, action) => {
        if (action.payload.user) {
          state.user = action.payload.user;
        } else {
          state.message = action.payload.message;
        }
      })
      .addCase(registrUser.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.message = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.user) {
          state.user = action.payload.user;
        } else {
          state.message = action.payload.message;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default userSlice.reducer;
