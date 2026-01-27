import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';

export const fetchCows = createAsyncThunk(
  'cows/fetch',
  async () => (await api.get('/cows')).data
);

export const addCow = createAsyncThunk(
  'cows/add',
  async (cow) => (await api.post('/cows', cow)).data
);

export const updateCow = createAsyncThunk(
  'cows/update',
  async ({ id, ...cow }) => {
    const response = await api.put(`/cows/${id}`, cow);
    return response.data;
  }
);

export const deleteCow = createAsyncThunk(
  'cows/delete',
  async (id) => {
    await api.delete(`/cows/${id}`);
    return id;
  }
);

const cowSlice = createSlice({
  name: 'cows',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchCows.fulfilled, (_, action) => action.payload)
      .addCase(addCow.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateCow.fulfilled, (state, action) => {
        const index = state.findIndex(c => c.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      })
      .addCase(deleteCow.fulfilled, (state, action) =>
        state.filter(c => c.id !== action.payload)
      );
  }
});

export default cowSlice.reducer;
