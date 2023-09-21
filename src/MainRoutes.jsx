import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import Home from "./components/Home/Home";
import EditContact from "./components/EditContact/EditContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddContact />} />
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
