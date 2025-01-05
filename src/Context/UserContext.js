// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Placeholder for user object

  const login = (userData) => {
    setUser(userData); // Set user data on login
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
