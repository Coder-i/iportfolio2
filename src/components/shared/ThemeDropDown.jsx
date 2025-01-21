import React, { useState } from "react";
import { FaPalette } from "react-icons/fa";
import { THEMES } from "../../utils/constants";

const ThemeDropdown = ({ currentTheme, onThemeChange, isMobile = false }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
    setDropdownOpen(false); // Close the dropdown after theme selection
  };

  return (
    <div
      className={`dropdown ${isMobile ? "dropdown-left" : "dropdown-end"} z-50`}
    >
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle bg-base-200/50 text-white hover:bg-base-200/70"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <FaPalette className="h-5 w-5" />
      </label>
      {isDropdownOpen && (
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-sm z-[100] mt-3 w-52 gap-1 bg-base-200 p-2 shadow-lg 
            max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-base-300"
        >
          {THEMES.map((theme) => (
            <li key={theme}>
              <button
                onClick={() => handleThemeChange(theme)}
                className={`capitalize hover:bg-base-300 ${
                  currentTheme === theme
                    ? "bg-primary/20 font-bold text-primary"
                    : "text-base-content"
                }`}
              >
                {theme}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeDropdown;
