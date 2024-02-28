import Admin from './Admin';

type AuthAdmin = {
  authChecked: boolean;
  admin?: Admin;
  authError?: string;
};

export default AuthAdmin;
