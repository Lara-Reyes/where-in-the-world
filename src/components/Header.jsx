import React from "react";
import Moon from "../assets/moon.svg";

function Header() {
  return (
    <div className="flex items-center justify-between h-16 p-3 shadow-md shadow-bottom mb-7 text-sm">
      <h1 className="font-bold">Where in the world?</h1>
      <button className="flex items-center justify-between text-xs">
        <img src={Moon} className="w-4 h-4 mr-1"/>
        Dark mode
      </button>
    </div>
  );
}

export default Header;
