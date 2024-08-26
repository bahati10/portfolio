import React from "react";
import CLOSEICON from "../../assets/CLOSEICON.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CloseButton: React.FC = () => {
  return (
    <>
      <div className="bg-custom-light-gray flex items-center justify-center w-11 h-11 rounded-full border-none">
        <LazyLoadImage src={CLOSEICON} alt="Close Icon" className="w-3" />
      </div>
    </>
  );
};

export default CloseButton;
