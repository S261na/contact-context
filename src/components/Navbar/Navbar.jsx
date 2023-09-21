import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-pink-300 h-20 justify-center items-center mb-10">
      <p className="m-5 text-xl">
        <NavLink to="/">Контакты</NavLink>
      </p>
      <p className="m-5 text-xl">
        <NavLink to="/add">Добавить</NavLink>
      </p>
      <p className="m-5 text-xl">
        <NavLink to="/edit">Изменить</NavLink>
      </p>
    </div>
  );
};

export default Navbar;
