import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { AuthProvider } from './context/AuthContext.jsx';

axios.defaults.baseURL = "http://localhost:8000/api/v1";
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider> 
      <BrowserRouter>
        <ToastContainer position="top-right"  />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

 
