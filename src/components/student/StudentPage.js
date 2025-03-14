import React, { useState } from 'react';
import Profile from './Profile';
import '../../styles/student.css';
import Logout from './Logout'; // Assuming Logout is a component (button)

const StudentPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <button
        className="profile-button"
        onClick={handleProfileClick}
        style={{ position: 'absolute', top: '10px', left: '10px', margin:0 }} // Added inline styles
      >
        P
      </button>

      <Logout className="logout-button" />

      {showProfile && <Profile onClose={handleCloseProfile} />}
    </div>
  );
};

export default StudentPage;
