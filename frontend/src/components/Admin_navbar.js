import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="sidenav">
      <Link to="/adminpage">Admin Page</Link>
      <Link to="/product">Admin Products</Link>
      <Link to="/category">Admin Categories</Link>
      <Link to="/">Public Site</Link>
      {localStorage.getItem('token') ? (
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <div className="main">
        <h2>Admin Page</h2>
        <p>This page is only used for the Admin of the Site.</p>
      </div>
    </div>
  );
};

export default AdminNavbar;
