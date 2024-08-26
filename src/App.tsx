// App.tsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/landing/home";
import SkillsPage from "./pages/skills/stacks";
import ProjectsPage from "./pages/projectsPage/projects";

const App: React.FC = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <div>
              <Home />
              <Routes>
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
              <SkillsPage />
              <ProjectsPage />
            </div>
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
