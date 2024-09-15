import React, { useState } from "react";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-center">
      <div
        className={`inline-block cursor-pointer ${isOpen ? "change" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`w-8 h-1 bg-gray-800 my-1.5 transition-transform duration-400 ${
            isOpen ? "transform translate-y-2.5 rotate-[-45deg]" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-gray-800 my-1.5 transition-opacity duration-400 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-gray-800 my-1.5 transition-transform duration-400 ${
            isOpen ? "transform -translate-y-2.5 rotate-[45deg]" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MenuIcon;
