import React, { useState } from 'react';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mt-6">
      <div className="lg:hidden flex justify-end">
        <button
          className="text-3xl font-bold hover:text-purple-700 transition duration-500"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div className={`lg:flex justify-end w-full lg:w-3/4 ${isOpen ? 'block' : 'hidden'} lg:block space-y-4 lg:space-y-0 lg:space-x-12 mt-4 lg:mt-0`}>
        <a href="#home" className="text-lg font-bold hover:text-purple-700 transition duration-500 block">HOME</a>
        <a href="#aboutme" className="text-lg font-bold hover:text-purple-700 transition duration-500 block">ABOUT</a>
        <a href="#projects" className="text-lg font-bold hover:text-purple-700 transition duration-500 block">PROJECTS</a>
        <a href="#contact" className="text-lg font-bold hover:text-purple-700 transition duration-500 block">CONTACT</a>
      </div>
    </div>
  );
}
