import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

import Footer from "./components/Footer/Footer";




const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <MainRoutes />
              <Footer />
      </BrowserRouter>



    </div>
  );
};

export default App;
