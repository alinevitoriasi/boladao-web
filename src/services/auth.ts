export const TOKEN_KEY = '@boladao-Token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const isAdmin = localStorage.getItem('isAdmin');
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAdminValidation = () => {
  if (localStorage.getItem('isAdmin') === 'false') return false;
  else {
    return true;
  }
};

export const login = (token: string, username: string, isAdmin?: boolean) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem('username', username);
  localStorage.setItem('isAdmin', isAdmin ? isAdmin?.toString() : 'false');
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('username');
  localStorage.removeItem('isAdmin');
};
