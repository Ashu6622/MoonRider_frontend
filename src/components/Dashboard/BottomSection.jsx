import React from 'react';
import TopProducts from './TopProducts';
import AddProfileCard from './AddProfileCard';
import './bottom-section.css';


const BottomSection = ({ onAddProfile }) => {
  return (
    <div className="bottom-section">
      <TopProducts />
      <AddProfileCard onAddProfile={onAddProfile} />
    </div>
  );
};

export default BottomSection;