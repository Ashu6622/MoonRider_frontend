import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsersPage.css';
import {getUserData} from '../../api'
 
const UsersPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);

  async function fetchData(){
    const {data} = await getUserData();
    setLoading(false);
    console.log(data)
    setUserData(data.data);
  }

  useEffect(()=>{
      fetchData();
  },[])

  const filteredUsers = userData?.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];


  if (loading) {
    return (
      <div className="users-page">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="users-container">
        <header className="users-header">
          <h1 className="page-title">Users Directory</h1>
          <p className="page-subtitle">Manage and view all user profiles</p>
        </header>

        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search users by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="users-grid">
          {filteredUsers.map((user) => (
            <div key={user._id} className="user-card">
              <div className="user-avatar">
                <img src={user.avatar} alt={`${user.name} avatar`} />
              </div>
              <div className="user-info">
                <h3 className="username">{user.name}</h3>
                <div className="user-details">
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>{user.name}</span>
                  </div>
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>{user.email}</span>
                  </div>
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>{user.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredUsers.length === 0 && searchTerm && (
          <div className="no-results">
            <h3>No users found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
        
        <div className="back-button-container">
          <button className="back-button" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;