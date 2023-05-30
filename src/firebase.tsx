// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: `${process.env.FIREBASE_API_KEY}`,
	authDomain: 'react-disney-app-43d60.firebaseapp.com',
	projectId: 'react-disney-app-43d60',
	storageBucket: 'react-disney-app-43d60.appspot.com',
	messagingSenderId: '280606126806',
	appId: '1:280606126806:web:adc2a31ee1adeebdc6cf77',
	measurementId: 'G-7P8NZMBCRH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
