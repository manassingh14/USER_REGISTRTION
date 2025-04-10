import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import View from './components/View';
import Update from './components/Update';
import Delete from './components/Delete';
import Login from './components/Login';
import './App.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear session/local storage
    // sessionStorage.clear();
    // localStorage.clear();

    navigate('/');
  };

  return (
    <>
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      <Update />
      <Delete />
      <View />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <h1 style={{ backgroundColor: 'greenyellow', textAlign: 'center' }}>User Registration System</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
