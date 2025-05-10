import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/website'>
      <App />
    </BrowserRouter>
   </React.StrictMode>, 
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
