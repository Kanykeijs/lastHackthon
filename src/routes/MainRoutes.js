import React from "react";
import { Route, Routes } from "react-router-dom";
import Children from "../components/ children/ Children";
import NursingHouse from "../components/nursinghouse/NursingHouse";
import HomePage from "../pages/HomaPage/HomePage";
import MedicinePage from "../pages/medicine/MedicinePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/medicine",
      element: <MedicinePage />,
      id: 2,
    },
    {
      link: "/deti",
      element: <Children />,
      id: 3,
    },

    {
      link: "/nursingHouse",
      element: <NursingHouse />,
      id: 5,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((page) => (
        <Route path={page.link} element={page.element} key={page.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
