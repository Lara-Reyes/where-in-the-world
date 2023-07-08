import React, { useRef, useState } from "react";
import "./SearchBar.css";
import searchIcon from "../assets/searchIcon.svg";
import searchDark from "../assets/search-darkMode.svg";
import closeIcon from "../assets/close.svg";
import closeDark from "../assets/close-darkMode.svg"

function SearchBar({ darkMode }) {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="relative w-11/12 max-w-xl">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={handleInputChange}
          type="search"
          placeholder="Search for a county..."
          className={`${darkMode ? "bg-night-elements" : "bg-day-elements"} ${darkMode ? "text-night-text" : "text-day-text"} search-input rounded shadow-md pl-14 h-12 text-xs w-full`}
        />
        {searchValue && (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <img
              src={darkMode ? closeDark : closeIcon}
              alt="Clear"
              className="w-3 h-3 cursor-pointer"
              onClick={handleClearClick}
            />
          </div>
        )}
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <img
            src={darkMode ? searchDark : searchIcon}
            alt="Search"
            className="w-3 h-3 ml-4"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
