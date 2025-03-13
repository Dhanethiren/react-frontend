import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import for useNavigate
import '../styles/login.css';  // Correct path to the CSS file

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use useNavigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials for validation (you can replace with actual auth logic)
    const userCredentials = {
      student: { username: 'student', password: 'pass123' },
      tutor: { username: 'tutor', password: 'pass123' },
    };

    // Validate login based on selected role and credentials
    if (role === 'student' && username === userCredentials.student.username && password === userCredentials.student.password) {
      navigate('/student'); // Redirect to student page
    } else if (role === 'tutor' && username === userCredentials.tutor.username && password === userCredentials.tutor.password) {
      navigate('/tutor'); // Redirect to tutor page
    } else {
      alert('Invalid login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>
        
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
