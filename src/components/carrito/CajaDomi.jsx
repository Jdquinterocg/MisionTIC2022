import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../styles/Carrito.css";

class CajaDomi extends Component {

  constructor() {
    super();
    this.state = {
      direccion: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    });
  }

  render() {
    return (
      <div className="container carrito">
        <form className="tabla align-itenms-center ">
          <h3 className="title">Envío a domicilio</h3>
          <h6>Confirme dirección de envío</h6>
          <div className="row">
            <div className="col-4">
              <p>{this.state.direccion}</p>
            </div>
            <div className="col-2">
              {/* Dirección registrada */}
              <input type="checkbox" className="form-check-input m-1"></input>
            </div>
          </div>
          
          <div className="row  mt-2">
            <label className="col align-items-center">
              Enviar a otra dirección
            </label>{" "}
          </div>
          
          <div className="row mb-1">
            <input
              onChange={this.handleOnChange}
              value = {this.state.direccion}
              id = "direccion"
              className="form-control"
              placeholder="Nueva dirección"
            ></input>
          </div>
          
          <label className="col align-items-center">Propina:</label>
          <div className="row mb-1">
            <input className="form-control" placeholder="$ Valor"></input>
          </div>
          
          <label className="col align-items-center">¿Devuelta de cuánto?</label>
          <div className="row mb-3">
            <input className="form-control" placeholder="$ Valor"></input>
          </div>
          
          <Link to="/confirmaDomicilio">
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

export default CajaDomi;
