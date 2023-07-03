import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // manage any states you need app-wide here
  const [user, setUser] = useState();

  useEffect(() => {
    // fetch user that is already logged in
  }, []);

  const login = (data) => {
    // logic logic here
  };

  const logout = () => {
    // logout logic here
  };

  // values are what are available to the greater application
  const value = {
    user,
    login,
    logout,
  };

  return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
