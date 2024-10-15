import React from "react";
import ProjectCard from "./projectCard";
import PICSOUL from "../../assets/PROJECTS/videography.jpg";
import MOCKUP from "../../assets/PROJECTS/mockup.jpg";
import PIKSOUL from "../../assets/PROJECTS/PIKSOUL.png";
import DEPOT from "../../assets/PROJECTS/DEPOT.png";

const ProjectsContainer: React.FC = () => {
  const projects = [
    {
      projectImageSrc: PICSOUL,
      stacks: ["UI/UX", "REACT"],
      logoSrc: "LOGO",
      title: "FIRST PROJECT",
      projectUrl: "urllll",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
      githubLink: "hhhh",
    },
    {
      projectImageSrc: MOCKUP,
      stacks: ["FIGMA", "FRAMER"],
      logoSrc: "LOGO",
      title: "FIRST PROJECT",
      projectUrl: "urllll",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
      githubLink: "hhhh",
    },
    {
      projectImageSrc: DEPOT,
      stacks: ["UI/UX", "ADOBE"],
      logoSrc: "../../assets/PROJECTS/LOGOS/DEPOT.svg",
      title: "DEPOT",
      projectUrl: "",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
      githubLink: "hhhh",
    },
    {
      projectImageSrc: PIKSOUL,
      stacks: ["UI/UX", "NEXT"],
      logoSrc: "LOGO",
      title: "PIKSOUL",
      projectUrl: "",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
      githubLink: "",
    },
  ];
  return (
    <>
      <div className="bg-custom-bg-color flex flex-col flex-wrap items-center justify-center w-full pb-10 pt-[100px] gap-y-10">
        <div className="font-bold text-center text-4xl text-fade-gradient tracking-tight">
          Projects
        </div>
        <div className="flex flex-wrap items-center justify-center w-full py-10 gap-x-20 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              projectImageSrc={project.projectImageSrc}
              stacks={project.stacks}
              logoSrc={project.logoSrc}
              logotext=""
              //   logotext={project.logotext}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
