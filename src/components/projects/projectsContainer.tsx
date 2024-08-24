import React from "react";
import ProjectCard from "./projectCard";
import PICSOUL from "../../assets/PROJECTS/videography.jpg";
import STRINGS from "../../assets/PROJECTS/strings.jpg";
import MOCKUP from "../../assets/PROJECTS/mockup.jpg";
import ABSTRACT from "../../assets/PROJECTS/abstract.jpg";
import PIKSOUL from "../../assets/PROJECTS/PIKSOUL.png";

const ProjectsContainer: React.FC = () => {
  const projects = [
    {
      projectImageSrc: PICSOUL,
      stacks: ["UI/UX", "NEXT"],
      logoSrc: "LO",
      logotext: "GO",
      title: "FIRST PROJECT",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
    },
    {
      projectImageSrc: MOCKUP,
      stacks: ["FIGMA & FRAMER"],
      logoSrc: "LO",
      logotext: "GO",
      title: "FIRST PROJECT",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
    },
    {
      projectImageSrc: ABSTRACT,
      stacks: ["UI/UX & ADOBE"],
      logoSrc: "LO",
      logotext: "GO",
      title: "FIRST PROJECT",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
    },
    {
      projectImageSrc: PIKSOUL,
      stacks: ["UI/UX", "NEXT"],
      logoSrc: "LO",
      logotext: "GO",
      title: "PIKSOUL",
      description:
        "psum passages, and more recently with desktop publishing software like Aldus PageMaker including versionem.",
    },
  ];
  return (
    <>
      <div className="bg-custom-bg-color flex flex-col flex-wrap items-center justify-center w-full py-10 gap-x-20 gap-y-16">
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
              logotext={project.logotext}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsContainer;
