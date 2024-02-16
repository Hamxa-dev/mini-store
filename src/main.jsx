import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navber from './component/navbers/Navber';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navber />
    <App />
  </React.StrictMode>,
);
