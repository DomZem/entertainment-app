import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: 'entertainment-app-606e1.firebaseapp.com',
  projectId: 'entertainment-app-606e1',
  storageBucket: 'entertainment-app-606e1.appspot.com',
  messagingSenderId: '439631894272',
  appId: '1:439631894272:web:9653726eab8d14bd2b85e5',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
