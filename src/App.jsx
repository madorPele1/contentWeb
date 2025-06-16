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
        <img style={{filter:" drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))"}} src="/contentWeb/media/tohad.svg" alt="tohad" width="100" />
        <h1 style={{ color: "#333", fontSize: "2.8rem", fontWeight: "900" }}>אתר הנגשת המידע</h1>
        <nav style={{ display: "flex",width:"100%", justifyContent: "center", gap: "0.2rem", alignItems: "stretch",
    flexDirection: "column "}}>
          <Link to="/lomdot"> <img src="/contentWeb/media/lomdotBtn.svg" alt="tohad" width="220" /></Link>
          <Link to="/torot"><img src="/contentWeb/media/torotBtn.svg" alt="tohad" width="220" /> </Link>
          <Link to="/bot"><img src="/contentWeb/media/botBtn.svg" alt="tohad" width="220" /></Link>
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
