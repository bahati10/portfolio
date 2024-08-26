// pages/Home.tsx
import React from "react";
import SkillsPage from "../skills/stacks";
import ProjectsPage from "../projectsPage/projects";
import HomeComponent from "../../components/landing/landing";

const Home: React.FC = () => {
  return (
    <div>
      <section id="about">
        <HomeComponent />
      </section>

      <section id="skills">
        <SkillsPage />
      </section>

      <section id="projects">
        <ProjectsPage />
      </section>
    </div>
  );
};
export default Home;
