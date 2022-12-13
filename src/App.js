import "./App.css";
import Main from "./pages/Main.js";
import Welcome from "./pages/Welcome.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Madein from "./pages/Madein.js";
import WhatDo from "./pages/WhatDo.js";
import Yahoo from "./pages/Yahoo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/whatdo" element={<WhatDo />} />
          <Route path="/madein" element={<Madein />} />
          <Route path="/yahoo" element={<Yahoo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
