import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Aboutus from './components/about-us/about-us';
import Contactus from './components/about-us/contact-us';
import UserProvider from './components/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/contact' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
