import React from "react";
import { Route, Routes } from "react-router-dom";
import Children from "./components/ children/ Children";
import NursingHouse from "./components/nursinghouse/NursingHouse";
import MedicinePage from "./pages/medicine/MedicinePage";

const Routing = () => {
  const PRIVAT_PAGES = [];
  const PUBLIC_PAGES = [
    {
      link: "/deti",
      element: <Children />,
      id: 1,
    },

    {
      link: "/medicine",
      element: <MedicinePage />,
      id: 2,
    },
    {
      link: "/nursingHouse",
      element: <NursingHouse />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {PUBLIC_PAGES.map((page) => (
        <Route path={page.link} key={page.id} element={page.element} />
      ))}
    </Routes>
  );
};

export default Routing;
