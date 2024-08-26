import React from "react";
import REDIRECT from "../../assets/PROJECTS/REDIRECT-BTN.svg";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  projectImageSrc: string;
  stacks: string[];
  logoSrc: string;
  logotext: string;
  title: string;
  description: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImageSrc,
  stacks,
  logoSrc,
  //   logotext,
  title,
  description,
  projectUrl,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 shadow-md rounded overflow-hidden">
        <div className="h-72">
          <img
            src={projectImageSrc}
            alt="Picsoul Project Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-56">
          <div className="flex flex-row items-center justify-between h-16 px-6">
            <div className="flex flex-wrap gap-1">
              {stacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-custom-bg-color font-poppins tracking-tight text-xs font-semibold px-3 py-1 rounded-[4px] bg-custom-light-gray flex gap-0"
                >
                  {stack}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <Link to={projectUrl}>
                <img
                  src={REDIRECT}
                  alt="Redirect to project"
                  className="w-10 cursor-pointer mx-2"
                />
              </Link>
              <div className="h-full">
                {logoSrc}
                {/* {logotext} */}
              </div>
            </div>
          </div>
          <div className="mt-4 px-6 font-poppins tracking-tighter text-3xl font-semibold text-custom-light-gray mb-6">
            {title}
          </div>
          <div className="font-poppins text-sm px-6">{description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
