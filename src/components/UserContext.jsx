import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 

const [user, setUser] = useState();

useEffect(() => {
   
}, []);

const login = (data) => {
    
}

const logout = () => {

}

const value = {
    user,
    login,
    logout
}

return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
);

};