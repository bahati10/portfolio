import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
