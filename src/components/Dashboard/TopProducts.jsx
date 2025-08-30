import React from 'react';
import './top-products.css';

const TopProducts = () => {
  const products = [
    { name: 'Basic Tees', percentage: 55, color: '#4ade80' },
    { name: 'Custom Short Pants', percentage: 31, color: '#fbbf24' },
    { name: 'Super Hoodies', percentage: 14, color: '#f87171' }
  ];

  return (
    <div className="top-products">
      <div className="products-header">
        <h3>Top products</h3>
        <span className="products-period">May - June 2021</span>
      </div>
      
      <div className="products-content">
        <div className="donut-chart">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
            <circle 
              cx="60" 
              cy="60" 
              r="40" 
              fill="none" 
              stroke="#4ade80" 
              strokeWidth="20"
              strokeDasharray={`${55 * 2.51} 251.2`}
              transform="rotate(-90 60 60)"
            />
            <circle 
              cx="60" 
              cy="60" 
              r="40" 
              fill="none" 
              stroke="#fbbf24" 
              strokeWidth="20"
              strokeDasharray={`${31 * 2.51} 251.2`}
              strokeDashoffset={`-${55 * 2.51}`}
              transform="rotate(-90 60 60)"
            />
            <circle 
              cx="60" 
              cy="60" 
              r="40" 
              fill="none" 
              stroke="#f87171" 
              strokeWidth="20"
              strokeDasharray={`${14 * 2.51} 251.2`}
              strokeDashoffset={`-${(55 + 31) * 2.51}`}
              transform="rotate(-90 60 60)"
            />
          </svg>
        </div>
        
        <div className="products-list">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <div className="product-indicator" style={{ backgroundColor: product.color }}></div>
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-percentage">{product.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;