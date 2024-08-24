import React from "react";
import { Outlet } from "react-router-dom";
import NavbarContainer from "../components/navbar/container";
import PageFooter from "../components/footer/footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <NavbarContainer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default MainLayout;
