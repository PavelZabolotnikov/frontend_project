import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import State from './types/State';
import * as api from './feedbackApi';
import Feedback from './types/Feedback';
import assert from 'assert';

const initialState: State = {
  feedbackList: [],
};

export const loadFeedback = createAsyncThunk(
  'lawyers/loadFeedback',
  async (id: number) => {
    const feedback = await api.loadFeedback(id);
    return feedback;
  },
);

export const loadFeedbackListAll = createAsyncThunk(
  'feedback/loadFeedbackList',
  async () => {
    const feedback = await api.loadFeedbackList();
    return feedback;
  },
);

export const removeOneFeedback = createAsyncThunk(
  'feedback/removeOneFeedback',
  async (id: number) => {
    const feedback = await api.removeFeedback(id);
    return { id };
  },
);

export const checkOneFeedback = createAsyncThunk(
  'feedback/checkOneFeedback',
  async (oneFeedback: Feedback) => {
    const feedback = await api.checkFeedback(oneFeedback);
    return { oneFeedback };
  },
);

type Props = {
  feedbackName: string;
  inputDate: string;
  inputPhone: string;
  inputEmail: string;
  inputAboutFeedback: string;
  lawyer_id: number;
  stars: number;
};

export const createFeedback = createAsyncThunk(
  'lawyers/createFeedback',
  async ({
    feedbackName,
    inputDate,
    inputPhone,
    inputEmail,
    inputAboutFeedback,
    lawyer_id,
    stars,
  }: Props) => {
    const fb = await api.createFeedback({
      feedbackName,
      inputDate,
      inputPhone,
      inputEmail,
      inputAboutFeedback,
      lawyer_id,
      stars,
    });

    // return fb;
  },
);

const feedbackSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadFeedback.fulfilled, (state, action) => {
        state.feedbackList = action.payload;
      })
      .addCase(loadFeedbackListAll.fulfilled, (state, action) => {
        state.feedbackList = action.payload;
      })
      .addCase(removeOneFeedback.fulfilled, (state, action) => {
        const result = state.feedbackList.filter(
          (el) => el.id !== action.payload.id,
        );
        state.feedbackList = result;
      })
      .addCase(checkOneFeedback.fulfilled, (state, action) => {
        const result = state.feedbackList.find(
          (el) => el.id !== action.payload.oneFeedback.id,
        );
        assert(result);
        result.accepted = true;
      });
    // я не меняю стейт поэтому не добавляю новый отзыв
    // builder.addCase(createFeedback.fulfilled, (state, action) => {
    //   state.feedbackList.push(action.payload);
    // });
  },
});

export default feedbackSlice.reducer;
