/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/type';
import * as apiTarifs from './apiTarifs';

const initialState: State = {
  tarifs: [],
  error: undefined,
  oneTarif: {
    id: 0,
    title: '',
    description: '',
    price: 0,
  },
};
export const loadTarifs = createAsyncThunk('alltarifs', () =>
  apiTarifs.loadTarifs(),
);

const tarifSlice = createSlice({
  name: 'tarif',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTarifs.fulfilled, (state, action) => {
        state.tarifs = action.payload;
      })
      .addCase(loadTarifs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default tarifSlice.reducer;
