import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/navbar";
import ScrollToTop from "./Components/ScrollToTop";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function Home() {
  return (
    <>
      <LandingPage />
      <Marquee />
      <Cards />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen bg-[#e0d4cd] scroll-smooth">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Featured />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          {/* old link kept working */}
          <Route path="/services" element={<Navigate to="/skills" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
