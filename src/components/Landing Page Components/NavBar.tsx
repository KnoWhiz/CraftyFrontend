import React from "react";

const NavBar = () => {
  return (
    <nav className="font-Inter text-xl fixed top-0 flex flex-row h-24 w-full items-center justify-between bg-main-white text-main-black pl-20 pr-16">
      <div className="">
        <h1 className="font-medium">Crafty</h1>
      </div>

      <div className="flex flex-row space-x-20">
        <h1>Features</h1>
        <h1>Documentation</h1>
      </div>
    </nav>
  );
};

export default NavBar;
