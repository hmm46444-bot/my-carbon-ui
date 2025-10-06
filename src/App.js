import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GenomePage from "./pages/GenomePage";
import Ask from "./pages/Ask";
import Timeline from "./pages/Timeline";
import "./App.css";

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        {/* Top Navbar */}
        <div className="navbar">
          <img src="/logo.png" alt="Falcon Logo" className="falcon-logo" />
          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/genome" className="nav-link">GENOME</NavLink>
            <NavLink to="/timeline" className="nav-link">Timeline</NavLink>
            <NavLink to="/ask" className="nav-link">Ask Aousha</NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genome" element={<GenomePage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
