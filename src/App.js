import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';  // Corrected import
import StudentPage from './components/student/StudentPage';
import TutorPage from './components/tutor/TutorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/tutor" element={<TutorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
