import React from "react";
import { Route, Routes } from "react-router-dom";
import MedicinePage from "../pages/medicine/MedicinePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/medicine",
      element: <MedicinePage />,
      id: 1,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
    // <Routes>
    //   {PUBLIC_ROUTES.map((page) => (
    //     <Route path={page.link} element={page.element} key={page.id} />
    //   ))}
    // </Routes>
  );
};

export default MainRoutes;
