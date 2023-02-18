import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postSlice from './Components/Posts/PostSlice';
import reqsSlice from './Components/Requests/ReqSlice';
import userSlice from './Components/auth/authRegSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
    requests: reqsSlice,
    users: userSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
