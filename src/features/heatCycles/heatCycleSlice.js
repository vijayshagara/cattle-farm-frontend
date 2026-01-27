import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const fetchHeatCycles = createAsyncThunk(
  'heat/fetch',
  async () => (await api.get('/heat-cycles')).data
);

export const addHeatCycle = createAsyncThunk(
  'heat/add',
  async (data) => (await api.post('/heat-cycles', data)).data
);

const slice = createSlice({
  name: 'heatCycles',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchHeatCycles.fulfilled, (_, action) => action.payload)
      .addCase(addHeatCycle.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  }
});

export default slice.reducer;
