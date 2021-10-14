import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles'
import { FirebaseContext } from './context/firebase'
import { initializeApp } from 'firebase/app';

const config = {
  apiKey: "AIzaSyA9GSTamARxud1HeIcN94MmrWTz9vcmA2o",
  authDomain: "netflix-3bde5.firebaseapp.com",
  projectId: "netflix-3bde5",
  storageBucket: "netflix-3bde5.appspot.com",
  messagingSenderId: "643698811839",
  appId: "1:643698811839:web:3679cf0d5a7bcdeb33770a"
};


const firebase = initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);




