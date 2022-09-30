import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAoBmkEwOiWo9t6BhSbhI_U0C2njZZ2wbE',
  authDomain: 'eduspace-ed18f.firebaseapp.com',
  databaseURL:
    'https://eduspace-ed18f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'eduspace-ed18f',
  storageBucket: 'eduspace-ed18f.appspot.com',
  messagingSenderId: '550728806435',
  appId: '1:550728806435:web:2ccf46f9f302ce867ac196',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

