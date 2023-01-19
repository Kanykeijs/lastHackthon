import React from "react";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

import Footer from "./components/Footer/Footer";
import Fund from "./components/Fund/Fund";
import AuthContextProvider from "./context/AuthContext";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {/* <Fund /> */}
        <Routing />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
