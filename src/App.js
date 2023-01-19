import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
