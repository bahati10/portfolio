import React from "react";
import PICSOUL from "../../assets/PROJECTS/videography.jpg";
// import STRINGS from "../../assets/PROJECTS/strings.jpg";

const ProjectCard: React.FC = () => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 shadow-md rounded overflow-hidden">
        <div className="h-80">
          <img src={PICSOUL} alt="Picsoul Project Image" />
        </div>
        <div className="h-80">
          <div className="flex flex-row items-center justify-between h-16 px-6">
            <div className="text-custom-content-gray font-poppins tracking-tight text-xs font-semibold">
              UI/UX & NEXT
            </div>
            <div>LOGOS</div>
          </div>
          <div className="mt-4 px-6 font-poppins tracking-tighter text-3xl font-semibold text-custom-light-gray mb-6">
            FIRST PROJECT
          </div>
          <div className="font-poppins text-sm px-6">
            psum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versionem.
          </div>
          <div className="px-6">
            <button className="border-2 border-custom-content-gray rounded-sm w-full h-12 mt-14 text-custom-content-gray">
              Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
