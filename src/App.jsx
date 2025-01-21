import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTheme } from './hooks/useTheme';
import VideoBackground from './components/Layout/VideoBackground';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Education from './pages/Education';

gsap.registerPlugin(ScrollTrigger);
 
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const mainRef = useRef(null);
  const { currentTheme, handleThemeChange } = useTheme(mainRef);

  
  return (
    <Router>
      <ScrollToTop />
      <div 
        ref={mainRef} 
        className="relative min-h-screen overflow-x-hidden bg-base-100 transition-colors duration-300"
        data-theme={currentTheme}
      >
        <VideoBackground />
        <div className="relative z-10">
          <Navbar currentTheme={currentTheme} onThemeChange={handleThemeChange} />
          <div className="pt-16 "> {/* Add padding top to prevent content overlap with fixed navbar */}
            <Routes>
              <Route path="/" element={<Home currentTheme={currentTheme} />} />
              <Route path="/about" element={<About currentTheme={currentTheme} />} />
              <Route path="/blog" element={<Blog currentTheme={currentTheme} />} />
              <Route path="/education" element={<Education currentTheme={currentTheme} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;