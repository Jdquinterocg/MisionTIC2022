import React from "react";

import "./styles/Header.css";
import user from "../imagenes/user-icon.png";

function Header() {
  return (
    <header className="Header">
      <h1 className="Header-titulo">Tienda Doña Paquita</h1>

      <div class="header__menu">
        <div class="header__menu--profile">
          <img src={user} alt="User" />
          <p>Perfil</p>
        </div>

        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
      
    </header>
  );
}

export default Header;
