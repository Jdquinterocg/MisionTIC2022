import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./styles/Carrito.css";

class CajaDomi extends Component {
  render() {
    return (
      <div className="container carrito">
        <form className="tabla align-itenms-center ">
          <h3 className="title">Envío a domicilio</h3>
          <h6>Confirme dirección de envío</h6>
          <h7>Calle 12 # 34 - 01</h7>
          {/* Dirección registrada */}
          <input type="checkbox" class="form-check-input m-1"></input>
          <div className="row  mt-2">
            <label className="col align-items-center">
              Enviar a otra dirección
            </label>{" "}
          </div>
          <div className="row mb-1">
            <input class="form-control" placeholder="Nueva dirección"></input>
          </div>
          <label className="col align-items-center">Propina:</label>
          <div className="row mb-1">
            <input class="form-control" placeholder="$ valor"></input>
          </div>
          <label className="col align-items-center">¿Devuelta de cuánto?</label>
          <div className="row mb-3">
            <input class="form-control" placeholder="$ valor"></input>
          </div>
          <Link to="/confirmaDomicilio">
            <button className="buttonConfirmar m-1"> Confirmar pedido </button>
          </Link>
          <Link to="/">
            <button className="button m-1"> Volver </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default CajaDomi;
