import React from "react";
import NavContact from "./contact";
import NavLogo from "./logo";
import NavEmail from "./toolbar";

const NavbarContainer: React.FC = () => {
  return (
    <>
      <nav className="flex items-center top-0 h-20 justify-between fixed left-0 right-0 z-20 bg-transparent backdrop-blur-[8px]">
        <div className="flex flex-row justify-between items-center w-1/4">
          <NavLogo />
          <NavEmail />
        </div>
        <NavContact />
      </nav>
    </>
  );
};

export default NavbarContainer;
