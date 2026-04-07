import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../redux/features/services/baseApi';
import authReducer from '../redux/features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});
