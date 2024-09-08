import React, { useState } from 'react';

import AuthContext from './AuthContext';

const AuthProvider: React.FC = ({ children }): any => {
  const [user, setUser] = useState<any>({});
  const TOKEN_KEY = '@boladao-Token';
  const getToken = localStorage.getItem(TOKEN_KEY);

  const contextValue = {
    user,
    setUser,
    getToken,
  };

  console.log(user);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
