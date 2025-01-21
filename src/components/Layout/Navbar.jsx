import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiRainyLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import ThemeDropdown from "../shared/ThemeDropDown";
import { menuItems } from "../../utils/constants";
const Navbar = ({ currentTheme, onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navbarClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-base-100/95 shadow-lg backdrop-blur-lg' : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClass}>
      <div className="container mx-auto px-4">
        <div className="navbar min-h-[4rem]">
          <div className="flex-1 flex items-center gap-2">
            <RiRainyLine className="text-2xl text-primary" />
            <Link
              to="/"
              className="btn btn-ghost text-xl font-bold text-primary hover:text-primary-focus"
            >
              Aman Baghel
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-none gap-4 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`btn btn-ghost text-secondary hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeDropdown
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}  
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeDropdown
              currentTheme={currentTheme}
              onThemeChange={onThemeChange}
            />
            <button
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <RiCloseLine className="text-2xl text-primary" />
              ) : (
                <RiMenu3Line className="text-2xl text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-base-100/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'top-16 opacity-100 visible' : '-top-full opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`btn btn-ghost justify-start text-secondary hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;