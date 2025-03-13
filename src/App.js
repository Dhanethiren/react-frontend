import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage';
import TutorPage from './components/TutorPage';

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
