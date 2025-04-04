import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen text-white scroll-smooth">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <Marquee />

                {/* Scroll Targets */}
                <div id="about" className="scroll-mt-28">
                  <About />
                </div>

                <Eyes />

                <div id="projects" className="scroll-mt-28">
                  <Featured />
                </div>

                <Cards />
                <Footer />
              </>
            }
          />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Skills/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;