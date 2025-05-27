import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from './firebase';
import { auth } from './firebase';


const auth = getAuth(app);

// Register user
export const register = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Login user
export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const logout = async () => {
  return await signOut(auth);
};
