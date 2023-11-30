import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import axios from 'axios';

axios.interceptors.request.use(
  config => {
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

    if (userInfo && userInfo.token) {
      config.headers['Authorization'] = 'Bearer ' + userInfo.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store = {store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
</Provider>
)
