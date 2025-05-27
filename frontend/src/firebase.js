import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBo8QFb1webIl1dyZpk1g-oYyEsY0rX9Zo",
  authDomain: "project2-2228e.firebaseapp.com",
  projectId: "project2-2228e",
  storageBucket: "project2-2228e.firebasestorage.app",
  messagingSenderId: "987143818318",
  appId: "1:987143818318:web:e55362f661eae65313471f",
  measurementId: "G-7GVHEZ6X9X"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;  