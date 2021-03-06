import React from "react";
import "../styles/Header.css";
import user from "../../imagenes/user-icon.png";
import logo from "../../imagenes/logo.jpg";
import carrito from "../../imagenes/carrito.png";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Header extends React.Component {

  onLogOutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  }

  render(){

    return (
      <header className="Header">
        <div className="col- text-center">
          <img src={logo} alt="Logo" />
          <h6 className="header-link">
            <a href="/">Inicio</a>
          </h6>
        </div>
        <div className="col-9 text-center">
          <h1 className="Header-titulo">Tienda Doña Paquita</h1>
        </div>
        <div className="col- text-center">
          <img src={carrito} alt="Carrito" />
          <h6 className="header-link">
            <a href="/compras">Carrito</a>
          </h6>
        </div>
        <div className="header__menu">
          <div className="header__menu--profile">
            <div className="col-1 text-center">
              <img src={user} alt="User" />
              <h6 className="header-link">
                <a href="/domicilios">Usuario</a>
              </h6>
            </div>
          </div>
  
          <ul>
            <li>
              <h6>
                <a href="/login">Iniciar sesión</a>
              </h6>
            </li>
            <li>
              <h6>
                <a onClick={this.onLogOutClick} href="/login">Cerrar sesión</a>
              </h6>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);