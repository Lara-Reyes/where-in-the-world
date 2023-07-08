import React from "react";
import { useState } from "react";
import DropDownArrow from "../assets/dropdown-arrow.svg";

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    // Falta el redireccionamiento
    console.log("Selected value:", value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        className="bg-day-lightElements text-sm rounded shadow-md flex items-center justify-between p-5 w-60 ml-4 mb-7 h-12"
        onClick={toggleMenu}
      >
        <span className="pr-2">Filter by Region</span>
        <img src={DropDownArrow} alt="Dropdown Arrow" className="w-4 h-4" />
      </button>
      {isOpen && (
        <ul className="absolute top-14 w-60 ml-4 bg-white rounded shadow">
          <li className="text-sm py-1 pt-3 px-6 hover:bg-gray-100" onClick={() => handleOptionClick("africa")}>
            Africa
          </li>
          <li className="text-sm py-1 px-6 hover:bg-gray-100" onClick={() => handleOptionClick("america")}>
            America
          </li>
          <li className="text-sm py-1 px-6 hover:bg-gray-100" onClick={() => handleOptionClick("asia")}>
            Asia
          </li>
          <li className="text-sm py-1 px-6 hover:bg-gray-100" onClick={() => handleOptionClick("europe")}>
            Europe
          </li>
          <li className="text-sm py-1 pb-3 px-6 hover:bg-gray-100" onClick={() => handleOptionClick("oceania")}>
            Oceania
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;
