import React from 'react';
import { Clock, CreditCard, Calendar, Users, Settings, HelpCircle, Phone } from 'lucide-react';
import './sidebar.css';
import {Link} from 'react-router-dom'


const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { icon: Clock, label: 'Dashboard', id: 'dashboard' },
    { icon: CreditCard, label: 'Transactions', id: 'transactions' },
    { icon: Calendar, label: 'Schedules', id: 'schedules' },
    { icon: Users, label: 'Users', id: 'users' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Board.</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
            item.label === "Users" ? 
                    <Link 
              key={index}
              to="/user-page"
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={20}/>
              <span>{item.label}</span>
            </Link> :
                      
                      <a
                      key={index} 
                        href="#" 
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(item.id);
                        }}
                      >
                        <item.icon size={20}/>
                        <span>{item.label}</span>
                      </a>

        ))}
      </nav>
      
      <div className="sidebar-footer">
        <a href="#" className="nav-item">
          <HelpCircle size={20} />
          <span>Help</span>
        </a>
        <a href="#" className="nav-item">
          <Phone size={20} />
          <span>Contact Us</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;