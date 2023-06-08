import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBe41b9APy1JuvpgEaW4jSmL3TC1ukkcSk',
  authDomain: 'react-native-uber-eat-cl-a7d9a.firebaseapp.com',
  projectId: 'react-native-uber-eat-cl-a7d9a',
  storageBucket: 'react-native-uber-eat-cl-a7d9a.appspot.com',
  messagingSenderId: '366975127845',
  appId: '1:366975127845:web:67ed7b5790be6ce2844acc',
  measurementId: 'G-F32494BDPY',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
