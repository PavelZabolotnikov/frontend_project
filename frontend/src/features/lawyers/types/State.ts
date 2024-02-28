import type Lawyer from './Lawyer';

type State = {
  lawyersList: Lawyer[];
  oneLawyer?: Lawyer;
  filterLaw: Lawyer[];
  setDarkTheme: boolean;
};
export default State;
