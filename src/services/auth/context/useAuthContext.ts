import { useState } from 'react';

interface IUseAuthContext {
  user: any;
  setUser: any;
  isAuthenticated?: any;
  getToken?: any;
}

const useAuthContext = (): IUseAuthContext => {
  const [user, setUser] = useState({});
  const TOKEN_KEY = '@boladao-Token';
  const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
  const getToken = localStorage.getItem(TOKEN_KEY);

  return {
    user,
    setUser,
    isAuthenticated,
    getToken,
  };
};

export default useAuthContext;
