import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import ChipMyRidePage from './ChipMyRidePage';
import Stage1InfoPage from './Stage1InfoPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChipMyRidePage />} />
        <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
