import React from 'react';
import { Plus } from 'lucide-react';
import './add-profile-card.css';


const AddProfileCard = ({ onAddProfile }) => {
  return (
    <div className="add-profile-card" onClick={onAddProfile}>
      <div className="add-icon">
        <Plus size={48} />
      </div>
      <p>Add Profile</p>
    </div>
  );
};

export default AddProfileCard;