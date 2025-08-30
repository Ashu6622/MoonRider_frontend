import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './config';

export const signInWithEmail = async (email, password) => {
  if (!auth) throw new Error('Firebase not initialized');
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (email, password) => {
  if (!auth) throw new Error('Firebase not initialized');
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  if (!auth || !googleProvider) throw new Error('Firebase not initialized');
  return signInWithPopup(auth, googleProvider);
};

export const logout = async () => {
  if (!auth) throw new Error('Firebase not initialized');
  return signOut(auth);
};