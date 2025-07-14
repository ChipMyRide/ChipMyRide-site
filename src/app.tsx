// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChipMyRidePage from './ChipMyRidePage';
import Stage1InfoPage from './Stage1InfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChipMyRidePage />} />
        <Route path="/tuning/stage1" element={<Stage1InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
