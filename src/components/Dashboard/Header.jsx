import React from 'react';
import { Search, Bell, User, LogOut  } from 'lucide-react';
import './header.css';
import {logout} from '../../firebase/auth'
import { useAuth } from '../../context/AuthContext';


const Header = () => {
  const { user } = useAuth();
  
  return (
    <header className="header">
      <h1>Dashboard</h1>
      <div className="header-actions">
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search..." />
        </div>
        <button className="notification-btn">
          <Bell size={20} />
        </button>
        <div className="user-avatar">
          {user?.photoURL ? (
            <img src={user.photoURL} alt="User Avatar" />
          ) : (
            <img src="avatar.png" alt="Default Avatar" />
          )}
        </div>
        <div className="user-avatar" onClick={logout}>
          <LogOut size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;