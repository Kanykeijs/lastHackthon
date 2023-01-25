import React from "react";
import { Route, Routes } from "react-router-dom";
import Children from "../components/ children/ Children";
import Fund from "../components/Fund/Fund";
import Login from "../components/Login";
import NursingHouse from "../components/nursinghouse/NursingHouse";
import Register from "../components/Registr";
import HomePage from "../pages/HomaPage/HomePage";
import MedicinePage from "../pages/medicine/MedicinePage";
import CreditCard from "react-credit-cards";

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
    {
      link: "/funde",
      element: <Fund />,
      id: 6,
    },
    {
      link: "/register",
      element: <Register />,
      id: 7,
    },
    {
      link: "/login",
      element: <Login />,
      id: 8,
    },
    {
      link: "/card",
      element: <CreditCard />,
      id: 9,
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
