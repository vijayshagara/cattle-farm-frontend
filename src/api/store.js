import { configureStore } from '@reduxjs/toolkit';
import cowReducer from '../features/cows/cowSlice';
import healthReducer from '../features/health/healthSlice';
import heatCycleReducer from '../features/heatCycles/heatCycleSlice';
import authReducer from '../features/auth/authSlice';
import { api } from './api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cows: cowReducer,
    health: healthReducer,
    heatCycles: heatCycleReducer,
  },
});


api.interceptors.request.use(
  config => {
    const token = store.getState().auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);
