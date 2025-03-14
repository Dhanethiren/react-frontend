import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'; // Make sure this path is correct

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      student: { username: 'student', password: 'pass123' },
      tutor: { username: 'tutor', password: 'pass123' },
    };

    if (role === 'student' && username === userCredentials.student.username && password === userCredentials.student.password) {
      navigate('/student');
    } else if (role === 'tutor' && username === userCredentials.tutor.username && password === userCredentials.tutor.password) {
      navigate('/tutor');
    } else {
      alert('Invalid login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome!</h2>
        <div className="role-buttons">
          <button
            type="button"
            className={`role-button ${role === 'student' ? 'active' : ''}`}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`role-button ${role === 'tutor' ? 'active' : ''}`}
            onClick={() => setRole('tutor')}
          >
            Tutor
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
