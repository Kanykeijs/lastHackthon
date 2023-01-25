import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

import Footer from "./components/Footer/Footer";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
