import React from 'react';
import Header from './Header';
import StatsCards from './StatsCards';
import ActivitiesChart from './ActivitiesChart';
import BottomSection from './BottomSection';
import './main-content.css';


const MainContent = ({ onAddProfile }) => {
  return (
    <div className="main-content">
      <Header />
      <div className="content-wrapper">
        <StatsCards />
        <ActivitiesChart />
        <BottomSection onAddProfile={onAddProfile} />
      </div>
    </div>
  );
};

export default MainContent;