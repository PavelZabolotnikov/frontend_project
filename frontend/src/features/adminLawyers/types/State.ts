import Lawyer from './Lawyer';
import LawyerChange from './LawyerChange';

type State = {
  eventList: Lawyer[];
  oneEvent: Lawyer;
  changeEventCard: LawyerChange;
};

export default State;
