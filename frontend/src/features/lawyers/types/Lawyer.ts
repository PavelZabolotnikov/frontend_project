// eslint-disable-next-line import/no-cycle
import Feedback from '../../lawyerProfile/types/Feedback';

type Lawyer = {
  id: number;
  full_name: string;
  price: string;
  description: string;
  speciality: string;
  experience: string;
  photo: File;
  phone: string;
  email: string;
  Feedbacks?: Feedback[];
};
export default Lawyer;
