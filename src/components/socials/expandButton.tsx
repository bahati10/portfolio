import React from "react";
import PROFILE1 from "../../assets/PROFILE1.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ExpandButton: React.FC = () => {
  return (
    <>
      <div className="bg-custom-light-gray flex items-center justify-center w-11 h-11 rounded-full border-none">
        <LazyLoadImage src={PROFILE1} alt="profileIcon" className="w-3" />
      </div>
    </>
  );
};

export default ExpandButton;
