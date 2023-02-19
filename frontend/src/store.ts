import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsSlice from './Components/News/NewsSlice';
import postSlice from './Components/Posts/PostSlice';
import reqsSlice from './Components/Requests/ReqSlice';

const store = configureStore({
  reducer: {
    posts: postSlice,
    requests: reqsSlice,
    news: newsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
