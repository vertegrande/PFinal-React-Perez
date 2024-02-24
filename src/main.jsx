import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Importa initializeApp desde firebase/app
import { initializeApp } from 'firebase/app';

// Configuración de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAeW-_p1So3IsQ-uMKyZDcXK-6ENUwKNX8",
  authDomain: "cursada49970.firebaseapp.com",
  projectId: "cursada49970",
  storageBucket: "cursada49970.appspot.com",
  messagingSenderId: "984123621659",
  appId: "1:984123621659:web:30a331df5f1204e27653be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
