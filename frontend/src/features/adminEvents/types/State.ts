import type Event from './Event';
import EventChange from './EventChange';

type State = {
  eventList: Event[];
  oneEvent: Event;
  changeEventCard: EventChange;
};

export default State;
