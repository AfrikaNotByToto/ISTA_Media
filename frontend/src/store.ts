import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import postSlice from './Components/Posts/PostSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
