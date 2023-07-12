import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    const storedData = localStorage.getItem('userData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const userData = parsedData ? parsedData : {};
      const profile = userData[email];

      if (profile && password === profile.password) {
        setUser(profile);
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(profile));
      } else {
        setUser(null);
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('userData');
      }
    } else {
      setUser(null);
      localStorage.setItem('isLoggedIn', 'false');
      localStorage.removeItem('userData');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('userData');
  };

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
