import React from 'react';
import './activities-chart.css';

const ActivitiesChart = () => {
  const data = [
    { week: 'Week 1', guest: 500, user: 400 },
    { week: 'Week 2', guest: 350, user: 450 },
    { week: 'Week 3', guest: 200, user: 300 },
    { week: 'Week 4', guest: 400, user: 350 }
  ];

  const maxValue = 500;

  return (
    <div className="activities-chart">
      <div className="chart-header">
        <h3>Activities</h3>
        <span className="chart-period">May - June 2021</span>
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot guest"></span>
            <span>Guest</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot user"></span>
            <span>User</span>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>500</span>
          <span>400</span>
          <span>300</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>
        
        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="bar-group">
              <div className="bars">
                <div 
                  className="bar user-bar"
                  style={{ height: `${(item.user / maxValue) * 100}%` }}
                ></div>
                <div 
                  className="bar guest-bar"
                  style={{ height: `${(item.guest / maxValue) * 100}%` }}
                ></div>
              </div>
              <span className="bar-label">{item.week}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesChart;