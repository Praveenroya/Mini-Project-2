import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      {/* Add more user profile details here */}
    </div>
  );
};

export default UserProfile;