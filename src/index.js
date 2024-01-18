import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './crypto-average-price-calculator/Routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routing />
);
reportWebVitals();
