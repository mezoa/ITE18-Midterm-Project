import { createContext, useContext, useState, useEffect } from 'react';
import api from './api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/users/me').then((response) => setUser(response.data));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/local', {
        identifier: email,
        password,
      });
      setUser(response.data.user);
      localStorage.setItem('authToken', response.data.jwt);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwt}`;
      return true;
    } catch (error) {
      if (error.response && error.response. data)
      {
        console.log('Error:', error.response.data.message);
      } else {
        console.log('Error:', error.message);
      }
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};