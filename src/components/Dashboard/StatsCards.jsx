import React from 'react';
import { DollarSign, CreditCard, Heart, Users } from 'lucide-react';
import './stats-card.css';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Revenues',
      value: '$2,129,430',
      change: '+2.5%',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Total Transactions',
      value: '1,520',
      change: '+1.3%',
      icon: CreditCard,
      color: 'orange'
    },
    {
      title: 'Total Likes',
      value: '9,721',
      change: '+1.8%',
      icon: Heart,
      color: 'pink'
    },
    {
      title: 'Total Users',
      value: '9,721',
      change: '+4.3%',
      icon: Users,
      color: 'purple'
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className={`stat-icon ${stat.color}`}>
            <stat.icon size={24} />
          </div>
          <div className="stat-content">
            <p className="stat-title">{stat.title}</p>
            <h3 className="stat-value">{stat.value}</h3>
            <span className="stat-change">{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;