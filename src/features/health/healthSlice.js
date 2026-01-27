import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const fetchHealth = createAsyncThunk(
  'health/fetch',
  async () => (await api.get('/health')).data
);

export const addHealth = createAsyncThunk(
  'health/add',
  async (data) => (await api.post('/health', data)).data
);

const healthSlice = createSlice({
  name: 'health',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchHealth.fulfilled, (_, action) => action.payload)
      .addCase(addHealth.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  }
});

export default healthSlice.reducer;
