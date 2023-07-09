import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect (() => { 
     const email = localStorage.getItem('isloggedin');
     if(email){ 
        const storedData = localStorage.getItem('userData');
        const parsedData = JSON.parse(storedData);
        const userData = parsedData;
        const profile = userData[email];
        setUser(profile)
        setIsLoggedIn(true)
     } 
  },[])

  const login = (email, password) => {
   
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const userData = parsedData ? parsedData : {};
      const profile = userData[email];

      if (profile && password === profile.password) {
        setUser(profile);
        setIsLoggedIn(true);
        localStorage.setItem( 'isloggedin' , email )
      } else {
        setUser(null);
        setIsLoggedIn(false);
      }
    } else {
      setUser(null);
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.setItem( 'isloggedin' , null );
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

