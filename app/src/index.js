import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router } from "react-router-dom";
import App from './components/App/App';
import AuthProvider from "./components/Auth/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Router>
            <AuthProvider/>
        </Router>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);