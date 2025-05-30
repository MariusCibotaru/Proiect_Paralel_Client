import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import fileReducer from './slices/fileSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    file: fileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
