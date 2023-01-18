import React from "react";
import Footer from "./components/Footer/Footer";
import Fund from "./components/Fund/Fund";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import Routing from "./Routing";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Fund />
        <Routing />
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
