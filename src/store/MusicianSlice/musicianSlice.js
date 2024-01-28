import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const musicianSlice = createSlice({
  name: 'music',
  initialState: initialState,
  reducers: {
    addMusician: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addMusician } = musicianSlice.actions;
export default musicianSlice.reducer;