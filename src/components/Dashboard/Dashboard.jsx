import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import AddProfileModal from './AddProfileModal';
import './dashboard.css';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="dashboard-content">
        <MainContent onAddProfile={openModal} />
        {isModalOpen && <AddProfileModal onClose={closeModal} />}
      </div>
    </div>
  );
};

export default Dashboard;