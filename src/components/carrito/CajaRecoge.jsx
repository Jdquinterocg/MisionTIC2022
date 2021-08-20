import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../styles/Carrito.css";

class CajaRecoge extends Component {
  render() {
    return (
      <div className="container carrito">
        <form className="tabla align-itenms-center ">
          <h3 className="title">Recoger en tienda</h3>
          <h6>Puede recoger su pedido en nuestra tienda física</h6>
          <label className="col align-items-center">¿Devuelta de cuánto?</label>
          <div className="row mb-3">
            <input className="form-control" placeholder="$ Valor"></input>
          </div>
          <Link to="/confirmaRecoge">
            <button className="buttonConfirmar m-1"> Confirmar pedido </button>
          </Link>
          <Link to="compras">
            <button className="button m-1"> Volver </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CajaRecoge;
