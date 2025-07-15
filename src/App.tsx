import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stage1InfoPage from './pages/Stage1InfoPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
    </Routes>
  );
}

export default App;
