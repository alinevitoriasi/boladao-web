import { createContext } from 'react';

interface IUseAuthContext {
  user: any;
  setUser: any;
  isAuthenticated?: any;
  getToken?: any;
}

const AuthContext = createContext({} as IUseAuthContext);

export default AuthContext;
