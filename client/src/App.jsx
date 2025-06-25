import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'; /* Just Grid */
import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Taskbar from "./components/Taskbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Myself from "./pages/Myself.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page-wrapper ">
      <Router>
        <Taskbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myself" element={<Myself />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </Router>
    </div>
  );
}

