import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LomdotPage from './components/LomdotPage';
import TorotPage from './components/TorotPage';
import BotPage from './components/BotPage';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>קטגוריות</h1>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <Link to="/lomdot">לומדות</Link>
          <Link to="/torot">תורות</Link>
          <Link to="/bot">בוט חילוץ</Link>
        </nav>
        <Routes>
          <Route path="/lomdot" element={<LomdotPage />} />
          <Route path="/torot" element={<TorotPage />} />
          <Route path="/bot" element={<BotPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
