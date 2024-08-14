import React from "react";
import NavContact from "./contact";
import NavLogo from "./logo";
import NavEmail from "./toolbar";

const NavbarContainer: React.FC = () => {
  return (
    <>
      <nav className="flex items-center top-0 h-16 justify-between mt-2 rounded-3xl">
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
