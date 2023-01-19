import { CreditCard } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import Fund from "./components/Fund/Fund";
import Login from "./components/Login";
import Register from "./components/Registr";
import Children from "./components/ children/ Children";
import Card from "./components/ children/Card";

const Routing = () => {
  const PUBLIC_PAGES = [
    {
      link: "/funde",
      element: <Fund />,
      id: 2,
    },
    {
      link: "/register",
      element: <Register />,
      id: 3,
    },
    {
      link: "/login",
      element: <Login />,
      id: 4,
    },
    {
      link: "/card",
      element: <CreditCard />,
      id: 4,
    },
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
