import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorText from './components/text/ErrorText';

import './css/general.css';
import Home from './routes/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <h1 className="title-text">OMDb</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorText text='Page not found' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
