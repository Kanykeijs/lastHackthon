import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";


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
