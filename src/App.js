import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ContactContextProvider from "./context/ContactContext";

const App = () => {
  return (
    <>
      <ContactContextProvider>
        <Navbar />
        <MainRoutes />
      </ContactContextProvider>
    </>
  );
};

export default App;
