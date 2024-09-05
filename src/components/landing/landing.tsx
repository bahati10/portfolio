import React from "react";

const HomeComponent: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-grow p-4 min-h-screen bg-custom-bg-color">
        <div className="flex items-center justify-center text-custom-light-gray h-10 w-36 font-medium rounded-full text-sm bg-custom-gray font-poppins tracking-tight">
          Bahati Yves &nbsp; <span className="text-lg">👋</span>
        </div>
        <div className="flex text-center text-fade-gradient text-5xl font-poppins font-bold tracking-tight leading-12 my-6">
          Building awesome <br />
          stuff, one codebase at <br />a time.
        </div>
        <button className="flex items-center justify-center bg-custom-light-gray text-custom-gray font-medium text-sm h-14 w-36 rounded-full drop-shadow-semi-bold">
          Get my cv
        </button>
      </div>
    </>
  );
};

export default HomeComponent;
