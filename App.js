
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LiveDashboard from "./pages/LiveDashboard";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/dashboard" style={{ margin: "0 10px" }}>Live Dashboard</Link>
        <Link to="/analytics" style={{ margin: "0 10px" }}>Analytics</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<LiveDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
