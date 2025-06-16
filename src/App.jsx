import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LomdotPage from "./components/LomdotPage";
import TorotPage from "./components/TorotPage";
import BotPage from "./components/BotPage";
import "@fontsource/assistant";
import "@fontsource/assistant/800.css";
import "@fontsource/assistant/700.css";
import "@fontsource/assistant/200.css";
import "@fontsource/assistant/500.css";
function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <img style={{filter:" drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))"}} src="/contentWeb/media/tohad.svg" alt="pakar" width="100" />
        <h1 style={{}}>אתר חירום פיקודי</h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
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
