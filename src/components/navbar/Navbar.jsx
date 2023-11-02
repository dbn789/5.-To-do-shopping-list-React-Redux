import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__link">
        <Link to="/">Начать</Link>
        <Link to="/list">Список дел</Link>
        <Link to="/buy">Список покупок</Link>
        <Link to="/edit">Редактирование</Link>
      </div>
    </div>
  );
};

export default Navbar;
