import React from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../components/navbar/container";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-layout-bg">
      <NavbarContainer />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
