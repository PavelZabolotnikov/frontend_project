import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import assert from 'assert';
import moment from 'moment';
import State from './types/State';
import * as apiEvent from './apiEvent';
import EventAdd from './types/EventAdd';
import EventChange from './types/EventChange';

const initialState: State = {
  eventList: [],
  oneEvent: {
    id: 0,
    date: new Date(),
    address: '',
    title: '',
    description: '',
    photo: '',
  },
  changeEventCard: {},
};

export const loadEvent = createAsyncThunk('event/loadEvent', () =>
  apiEvent.loadEvents(),
);

export const loadOneEvent = createAsyncThunk(
  'lawyers/loadOneEvent',
  async (id: number) => {
    const oneEvent = await apiEvent.loadOneEvent(id);
    return oneEvent;
  },
);

export const removeEvent = createAsyncThunk(
  'event/removeEvent',
  async (id: number) => {
    await apiEvent.removeEvents(id);
    return { id };
  },
);

export const createEvent = createAsyncThunk(
  'event/createEvent',
  (oneEvent: EventAdd) => apiEvent.createEvents(oneEvent),
);

export const changeEventCard = createAsyncThunk(
  'event/changeEvent',
  async (changeEvent: EventChange) => {
    await apiEvent.updateEvents(changeEvent);
    return { changeEvent };
  },
);

const eventSliceAdmin = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers: (element) => {
    element
      .addCase(loadEvent.fulfilled, (state, action) => {
        state.eventList = action.payload;
      })
      .addCase(removeEvent.fulfilled, (state, action) => {
        const result = state.eventList.filter(
          (el) => el.id !== action.payload.id,
        );
        state.eventList = result;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.eventList.push(action.payload);
      })
      .addCase(changeEventCard.fulfilled, (state, action) => {
        const result = state.eventList.find(
          (el) => el.id === action.payload.changeEvent.id,
        );
        assert(result);
        assert(action.payload.changeEvent.address);
        assert(action.payload.changeEvent.title);
        assert(action.payload.changeEvent.description);
        assert(action.payload.changeEvent.date);
        result.address = action.payload.changeEvent.address;
        result.title = action.payload.changeEvent.title;
        result.description = action.payload.changeEvent.description;
        result.date = new Date(action.payload.changeEvent.date);
      })
      .addCase(loadOneEvent.fulfilled, (state, action) => {
        state.oneEvent = action.payload;
      });
  },
});

export default eventSliceAdmin.reducer;
