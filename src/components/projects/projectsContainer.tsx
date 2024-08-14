import React from "react";
import ProjectCard from "./projectCard";

const ProjectsContainer: React.FC = () => {
  return (
    <>
      <div className="bg-custom-bg-color flex flex-wrap items-center justify-center w-full mb-20 py-10 gap-x-20 gap-y-16">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default ProjectsContainer;
