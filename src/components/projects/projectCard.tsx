import React from "react";

interface ProjectCardProps {
  projectImageSrc: string;
  stacks: string[];
  logoSrc: string;
  logotext: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImageSrc,
  stacks,
  logoSrc,
  logotext,
  title,
  description,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 shadow-md rounded overflow-hidden">
        <div className="h-80">
          <img
            src={projectImageSrc}
            alt="Picsoul Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-80">
          <div className="flex flex-row items-center justify-between h-16 px-6">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="text-custom-bg-color font-poppins tracking-tight text-xs font-semibold px-3 py-1 rounded-md bg-custom-light-gray border-2 border-red-400 flex"
              >
                {stack}
              </div>
            ))}
            <div>
              {logoSrc}
              {logotext}
            </div>
          </div>
          <div className="mt-4 px-6 font-poppins tracking-tighter text-3xl font-semibold text-custom-light-gray mb-6">
            {title}
          </div>
          <div className="font-poppins text-sm px-6">{description}</div>
          <div className="px-6">
            <button className="border-2 border-custom-content-gray rounded-sm w-full h-12 mt-14 text-custom-content-gray hover:bg-custom-content-gray hover:text-slate-50 transition hover:duration-500">
              Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
