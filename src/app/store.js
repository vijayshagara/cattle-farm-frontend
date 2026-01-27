import { configureStore } from '@reduxjs/toolkit';
import cowReducer from '../features/cows/cowSlice';
import healthReducer from '../features/health/healthSlice';
import heatCycleReducer from '../features/heatCycles/heatCycleSlice';

export const store = configureStore({
  reducer: {
    cows: cowReducer,
    health: healthReducer,
    heatCycles: heatCycleReducer,
  },
});
