import React from "react";
import GLOBE3 from "../../assets/GLOBES/GLOBE3.svg";
import GIT from "../../assets/GLOBES/GIT.svg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ProjectCardProps {
  projectImageSrc: string;
  stacks: string[];
  logoSrc: string;
  logotext: string;
  title: string;
  description: string;
  projectUrl: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectImageSrc,
  stacks,
  logoSrc,
  title,
  description,
  projectUrl,
  githubLink,
}) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 shadow-md rounded overflow-hidden">
        <div className="h-72 shadow-md">
          <LazyLoadImage
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
              {projectUrl ? (
                <Link to={projectUrl} target="blank">
                  <LazyLoadImage
                    src={GLOBE3}
                    alt="Redirect to project"
                    className="w-7 cursor-pointer mx-1"
                  />
                </Link>
              ) : (
                <Link to={projectUrl}>
                  <LazyLoadImage
                    src={GLOBE3}
                    alt="Redirect to project"
                    className="w-7 cursor-not-allowed mx-1"
                  />
                </Link>
              )}
              {githubLink ? (
                <Link to={githubLink}>
                  <LazyLoadImage
                    src={GIT}
                    alt=""
                    className="w-7 cursor-pointer mx-1"
                  />
                </Link>
              ) : (
                <Link to={githubLink}>
                  <LazyLoadImage
                    src={GIT}
                    alt=""
                    className="w-7 cursor-not-allowed mx-1"
                  />
                </Link>
              )}
              <div className="h-full">
                <LazyLoadImage src={logoSrc} alt="" />
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
