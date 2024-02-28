import Lawyer from '../../lawyers/types/Lawyer';

type Feedback = {
  id: number;
  lawyer_id: number;
  accepted: boolean;
  content: string;
  full_name: string;
  date: string;
  phone: string;
  email: string;
  stars: number;
  Lawyer: Lawyer;
};

export default Feedback;
