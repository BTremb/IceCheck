import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.userName}</p>
      <p>Email: {user.email}</p>
      {/* Add more profile information */}
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;

