import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/landing/home";
import NotFound from "./pages/notFound/NotFoundpage";

const App: React.FC = () => {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
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
