import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiApple } from 'react-icons/si';
import { signInWithEmail, signInWithGoogle, signUpWithEmail } from '../firebase/auth';
import './SignIn.css';
import {adminRegister} from '../api'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignUp) {
        const res = await signUpWithEmail(email, password);
        console.log(res)
        
      } else {
        const res = await signInWithEmail(email, password);
        console.log(res);
      }
      navigate('/dashboard');
    } catch (error) {
      if (error.message.includes('Firebase not initialized')) {
        // Demo mode - allow any email/password
        if (email && password) {
          navigate('/dashboard');
        } else {
          alert('Please enter email and password');
        }
      } else if (error.code === 'auth/invalid-credential') {
        alert('Invalid email or password. Please check your credentials or sign up for a new account.');
      } else if (error.code === 'auth/user-not-found') {
        alert('No account found with this email. Please sign up first.');
      } else if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use. Please sign in instead.');
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const {user} = await signInWithGoogle();
      const res = await adminRegister({name : user.displayName, email:user.email, uid:user.uid});

      if(res.status === 201){
        return navigate('/dashboard')
      }
      else{
        alert('Try to loginIn')
      }
    } catch (error) {
      alert('Try again after some time')
    }
    setLoading(false);
  };

  return (
    <div className="signin-container">
      <div className="signin-left">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="white"/>
              <path d="M12 20L18 26L28 14" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1>BASE</h1>
        </div>
        <div className="social-icons">
          <FaGithub size={24} />
          <FaTwitter size={24} />
          <FaLinkedin size={24} />
          <FaDiscord size={24} />
        </div>
      </div>
      
      <div className="signin-right">
        <div className="signin-form-container">
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
          <p>{isSignUp ? 'Create your account' : 'Sign in to your account'}</p>
          
          <div className="social-signin">
            <button className="google-btn" onClick={handleGoogleSignIn} disabled={loading}>
              <FcGoogle size={20} />
              Sign in with Google
            </button>
            <button className="apple-btn" disabled>
              <SiApple size={20} />
              Sign in with Apple
            </button>
          </div>
          
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="forgot-password">
              <a href="#forgot">Forgot password?</a>
            </div>
            
            <button type="submit" className="signin-btn" disabled={loading}>
              {loading ? (isSignUp ? 'Creating Account...' : 'Signing In...') : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
          </form>
          
          <div className="signup-link">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(!isSignUp); }}>
              {isSignUp ? ' Sign in here' : ' Register here'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;