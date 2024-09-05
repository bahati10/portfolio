import React from "react";
import NotFoundDisplay from "./NotFoundGraphic";

const NotFoundComp: React.FC = () => {
  return (
    <div className="flex items-center justify-center border-2 border-black min-h-screen">
      <NotFoundDisplay />
    </div>
  );
};

export default NotFoundComp;
