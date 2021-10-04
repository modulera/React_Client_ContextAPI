import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

import { AuthProvider } from './context';
import { AuthReducer, initialState } from "../src/context/reducer"

import { LayoutProvider } from "./context/LayoutContext";

ReactDOM.render(
  <React.StrictMode>
    <LayoutProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
