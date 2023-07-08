import React, { useState } from "react";
import Moon from "../assets/moon.svg";
import MoonFill from "../assets/fill-moon.svg";

function Header({ toggleDarkMode, darkMode }) {
  const [buttonIcon, setButtonIcon] = useState(Moon);

  const handleButtonClick = () => {
    toggleDarkMode();
    setButtonIcon(buttonIcon === Moon ? MoonFill : Moon);
  };

  return (
    <div className={`flex items-center justify-between h-16 p-3 shadow-md shadow-bottom mb-7 text-sm ${darkMode ? "bg-night-elements" : "bg-day-elements"}`}>
      <h1 className={`font-bold ${darkMode ? "text-night-text" : "text-day-text"}`}>Where in the world?</h1>
      <button onClick={handleButtonClick} className={`flex items-center justify-between text-xs ${darkMode ? "text-night-text" : "text-day-text"}`}>
        <img src={buttonIcon} className="w-4 h-4 mr-1"/>
        Dark mode
      </button>
    </div>
  );
}

export default Header;
