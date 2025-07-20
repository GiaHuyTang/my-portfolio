import React from "react";
import './App.css';
import { useState, useEffect } from "react";
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
import LoadingScreen from "./components/LoadingScreen.jsx";

export default function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    return !sessionStorage.getItem("hasSeenLoading");
  });

  useEffect(() => {
    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setIsFirstVisit(false);
        sessionStorage.setItem("hasSeenLoading", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isFirstVisit]);

  return isFirstVisit ? (
    <LoadingScreen />
  ) : (
    <div className="page-wrapper">
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

