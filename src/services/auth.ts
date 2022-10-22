export const TOKEN_KEY = '@boladao-Token';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token: string, username: string) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem('username', username);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem('username');
};
