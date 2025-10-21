import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"; // Create these components
import Tutorial from "./pages/Tutorial";
import Presentation from "./pages/Presentation";


function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </HashRouter>
  );
}

export default App;