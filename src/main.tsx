import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChipMyRidePage from './ChipMyRidePage.jsx';
import Stage1InfoPage from './Stage1InfoPage.jsx'; // <— deine Info-Seite

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChipMyRidePage />} />
        <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
