import Feedback from '../../lawyerProfile/types/Feedback';

type Lawyer = {
  id: number;
  full_name: string;
  price: string;
  description: string;
  speciality: string;
  experience: string;
  photo: File;
  email: string;
  phone: string;
  Feedbacks?: Feedback[];
};

export default Lawyer;
