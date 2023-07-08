import React, { useRef, useState } from "react";
import "./SearchBar.css";
import searchIcon from "../assets/searchIcon.svg";
import closeIcon from "../assets/close.svg";

function SearchBar() {
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
          className="search-input rounded shadow-md pl-14 h-12 text-xs w-full bg-day-lightElements"
        />
        {searchValue && (
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <img
              src={closeIcon}
              alt="Clear"
              className="w-3 h-3 cursor-pointer"
              onClick={handleClearClick}
            />
          </div>
        )}
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          <img src={searchIcon} alt="Search" className="w-3 h-3 ml-4" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
