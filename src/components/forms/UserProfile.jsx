import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUser(parsedData);
    }
  }, []);

  if (!user) {
    return <div>Error: User data not found.</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.userName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

ProfilePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ProfilePage;





