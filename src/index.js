import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { AuthProvider } from 'Contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    {/* Same as */}
    <ToastContainer />
  </BrowserRouter>,

  document.getElementById('root')
);
