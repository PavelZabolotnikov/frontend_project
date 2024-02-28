import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import assert from 'assert';
import State from './types/State';
import * as api from './api';
import * as apiLawyer from '../adminLawyers/apiLawyer';
import { ApplicationForm } from './types/ApplicationForm';
import LawyerAdd from '../adminLawyers/types/LawyerAdd';
import LawyerChange from '../adminLawyers/types/LawyerChange';

const initialState: State = {
  lawyersList: [],
  filterLaw: [],
  setDarkTheme: false,
};

export const loadLawyers = createAsyncThunk('lawyers/loadLawyers', async () => {
  const lawyers = await api.loadLawyers();
  return lawyers;
});

export const loadTg = createAsyncThunk(
  'lawyers/tg',
  async (applicationForm: ApplicationForm) => {
    const tg = await api.tgLawyers(applicationForm);
    return tg;
  },
);

export const loadOneLawyer = createAsyncThunk(
  'lawyers/loadOneLawyer',
  async (id: number) => {
    const lawyer = await api.loadOneLawyer(id);
    return lawyer;
  },
);

export const removeLawyer = createAsyncThunk(
  'event/removeLawyer',
  async (id: number) => {
    await apiLawyer.removeLawyers(id);
    return { id };
  },
);

export const createLawyer = createAsyncThunk(
  'event/createLawyer',
  (oneLawyer: LawyerAdd) => apiLawyer.createLawyers(oneLawyer),
);

export const changeLawyerCard = createAsyncThunk(
  'event/changeLawyer',
  async (changeLawyer: LawyerChange) => {
    await apiLawyer.updateLawyers(changeLawyer);
    return { changeLawyer };
  },
);

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {
    setDarkTheme: (state, action) => {
      state.setDarkTheme = action.payload;
    },
    // filterLawyers: (state, action) => {
    //   state.lawyersList = state.lawyersList.filter(
    //     (el) => el.speciality === action.payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadLawyers.fulfilled, (state, action) => {
        state.lawyersList = action.payload;
      })
      .addCase(loadOneLawyer.fulfilled, (state, action) => {
        state.oneLawyer = action.payload;
      })
      .addCase(removeLawyer.fulfilled, (state, action) => {
        const result = state.lawyersList.filter(
          (el) => el.id !== action.payload.id,
        );
        state.lawyersList = result;
      })
      .addCase(createLawyer.fulfilled, (state, action) => {
        state.lawyersList.push(action.payload);
      })
      .addCase(changeLawyerCard.fulfilled, (state, action) => {
        const data = state.lawyersList.find(
          (el) => el.id === action.payload.changeLawyer.id,
        );
        assert(action.payload.changeLawyer.description);
        assert(action.payload.changeLawyer.email);
        assert(action.payload.changeLawyer.experience);
        assert(action.payload.changeLawyer.full_name);
        assert(action.payload.changeLawyer.phone);
        assert(action.payload.changeLawyer.price);
        assert(action.payload.changeLawyer.speciality);
        assert(data);
        data.description = action.payload.changeLawyer.description;
        data.email = action.payload.changeLawyer.email;
        data.full_name = action.payload.changeLawyer.full_name;
        data.phone = action.payload.changeLawyer.phone;
        data.price = action.payload.changeLawyer.price;
        data.speciality = action.payload.changeLawyer.speciality;
        data.experience = action.payload.changeLawyer.experience;
      });
  },
});

export const { setDarkTheme } = lawyersSlice.actions;

export default lawyersSlice.reducer;
