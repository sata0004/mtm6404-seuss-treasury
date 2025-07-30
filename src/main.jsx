import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter from 'react-router-dom'
import App from './App'; // Importing the main App component
import './index.css'; // Importing global CSS styles

// Rendering the React application into the root element in the HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter> {/* Enabling routing in the application */}
      <App /> {/* Main application component */}
    </BrowserRouter>
  
);

