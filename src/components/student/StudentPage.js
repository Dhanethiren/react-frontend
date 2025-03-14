import React from 'react';
import Profile from './Profile';
import Logout from './Logout';

const StudentPage = () => {
  return (
    <div className="student-container">
      <h2>Welcome to the Student Dashboard!</h2>
      <Profile />
      <Logout />
    </div>
  );
};

export default StudentPage;
