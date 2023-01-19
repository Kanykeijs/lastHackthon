import { Card } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Children from "./components/ children/ Children";

const Routing = () => {
  const PRIVAT_PAGES = [];
  const PUBLIC_PAGES = [
    {
      link: "/deti",
      element: <Children />,
      id: 1,
    },
    {
      link: "/deti",
      element: <Card />,
      id: 2,
    },
    // {
    //   link: "/deti",
    //   element: <Footer />,
    //   id: 3,
    // },
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
