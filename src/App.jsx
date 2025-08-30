import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard/Dashboard';
import UsersPage from './components/UsersPage/UsersPage';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  // console.log(user);
  return user ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  // console.log(user);
  return !user ? children : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<PublicRoute><SignIn /></PublicRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/user-page" element={<ProtectedRoute><UsersPage /></ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;