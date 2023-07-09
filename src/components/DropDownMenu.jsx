import React from "react";
import { useState } from "react";
import DropDownArrow from "../assets/dropdown-arrow.svg";
import DropDownArrowDarkMode from "../assets/dropdown-arrow-darkMode.svg";

function DropDownMenu({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    // Falta el redireccionamiento
    console.log("Selected value:", value);
    setIsOpen(false);
  };

  const hoverClass = darkMode
  ? "hover:bg-night-hover"
  : "hover:bg-day-hover";

  return (
    <div className="relative inline-block">
      <button
        className={`bg-${darkMode ? "night" : "day"}-elements text-${darkMode ? "night" : "day"}-text text-sm rounded shadow-md flex items-center justify-between p-5 w-60 ml-4 mb-7 h-12`}
        onClick={toggleMenu}
      >
        <span className="pr-2">Filter by Region</span>
        <img
          src={darkMode ? DropDownArrowDarkMode : DropDownArrow}
          alt="Dropdown Arrow"
          className="w-4 h-4"
        />
      </button>
      {isOpen && (
        <ul className={`bg-${darkMode ? "night" : "day"}-elements text-${darkMode ? "night" : "day"}-text absolute top-14 w-60 ml-4 rounded shadow`}>
          <li
            className={`text-sm py-1 pt-3 px-6 ${hoverClass}`}
            onClick={() => handleOptionClick("africa")}
          >
            Africa
          </li>
          <li
            className={`text-sm py-1 px-6 ${hoverClass}`}
            onClick={() => handleOptionClick("america")}
          >
            America
          </li>
          <li
            className={`text-sm py-1 px-6 ${hoverClass}`}
            onClick={() => handleOptionClick("asia")}
          >
            Asia
          </li>
          <li
            className={`text-sm py-1 px-6 ${hoverClass}`}
            onClick={() => handleOptionClick("europe")}
          >
            Europe
          </li>
          <li
            className={`text-sm pb-3 py-1 px-6 ${hoverClass}`}
            onClick={() => handleOptionClick("oceania")}
          >
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
