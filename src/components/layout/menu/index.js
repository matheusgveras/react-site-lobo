import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <ul>
      <li>
        {" "}
        <Link to="/contact">Contato</Link>
      </li>
      <li>
        {" "}
        <Link to="/projects">Projetos</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">Sobre</Link>
      </li>
    </ul>
  );
}
export default Menu;
