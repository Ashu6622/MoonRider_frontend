import React, { useState } from 'react';
import { X } from 'lucide-react';
import './modal.css';
import {addUserData} from '../../api'
import {useNavigate} from 'react-router-dom'

const AddProfileModal = ({ onClose }) => {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    instaUrl: '',
    youtubeUrl: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setActiveTab('social');
  };

  const handleBack = () => {
    setActiveTab('basic');
  };

  const handleDone = async () => {
   
      const res = await addUserData(formData);
      console.log(res);
      if(res.status === 201){
        onClose();
        return navigate('/user-page');
      }
      else{
        return alert('try again');
      }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Profile</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-tabs">
          <button 
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic
          </button>
          <button 
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Social
          </button>
        </div>
        
        <div className="modal-body">
          {activeTab === 'basic' ? (
            <div className="basic-form">
              <div className="form-group">
                <label>Enter Name*</label>
                <input 
                  type="text" 
                  placeholder="Eg. John Doe"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Enter Email*</label>
                <input 
                  type="email" 
                  placeholder="Eg. john@xyz.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Enter Phone*</label>
                <input 
                  type="tel" 
                  placeholder="Eg. 9123456789"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="social-form">
              <div className="form-group">
                <label>Instagram Link <span className="optional">(Optional)</span></label>
                <input 
                  type="text" 
                  placeholder="Eg. instagram.com/username"
                  value={formData.instaUrl}
                  onChange={(e) => handleInputChange('instaUrl', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Youtube Link <span className="optional">(Optional)</span></label>
                <input 
                  type="text" 
                  placeholder="Eg. youtube/username"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleInputChange('youtubeUrl', e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="modal-footer">
          {activeTab === 'basic' ? (
            <button className="btn-primary" onClick={handleNext}>
              Next
            </button>
          ) : (
            <>
              <button className="btn-secondary" onClick={handleBack}>
                Back
              </button>
              <button className="btn-primary" onClick={handleDone}>
                Done
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProfileModal;