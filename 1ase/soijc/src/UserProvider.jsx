import React, { createContext, useState } from 'react';

// Create a Context for the user
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('John Doe');

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
