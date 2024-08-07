import React, { useContext } from 'react';
import { UserContext } from './UserProvider'; // Adjust the path according to your project structure

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome, {user}!</p>
    </div>
  );
};

export default UserProfile;
