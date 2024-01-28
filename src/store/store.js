import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './musicSlice/musicSlice';

const store = configureStore({
  reducer: {
    music: musicReducer ,
  },
  devTools: true,
});

export default store;