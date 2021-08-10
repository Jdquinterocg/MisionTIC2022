import React from "react";
import "../styles/Carrito.css";
import { Link } from "react-router-dom";

// parámetro -> total
function FuncionesCarrito(props) {
  const carrito = props.carro;

  return (
    <div className="carrito">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Carrito de Compras</h2>
          <div className="tabla">
            <div class="row">
              <div class="col">
                <strong>Producto</strong>
              </div>
              <div class="col">
                <strong>Precio</strong>
              </div>
              <div class="col">
                <strong>Cantidad</strong>
              </div>
              <div class="col">
                <strong>Subtotal </strong>
              </div>
              <div class="col-1"></div>
              <div class="col-1"></div>
            </div>
            <hr />

            <ul className="list-unstyled">
              {carrito.map((producto) => {
                return (
                  <li key={producto.id}>
                    <div className="text-center">
                      <div className="row align-items-center">
                        <div className="col">{producto.nombre}</div>
                        <div className="col">${producto.precio}</div>
                        <div className="col">{producto.cantidad}</div>
                        <div className="col">
                          ${producto.cantidad * producto.precio}
                        </div>
                        <div className="col-1">
                          <button className="buttonCantidad">Modificar</button>
                        </div>
                        <div className="col-1">
                          <button className="buttonCantidad">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div class="row justify-content-end">
              {/* parámetro -> total          */}
              <div className="col-6 fs-5">
                {" "}
                <strong>Total = </strong> ${props.total}
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="button m-1"> Seleccionar más productos </button>
        </Link>
        <Link to="/recoge">
          <button className="button float-end m-1"> Recoger en tienda </button>
        </Link>
        <Link to="/domi">
          <button className="button float-end m-1"> Pedir a domicilio </button>
        </Link>
      </div>
    </div>
  );
}

export default FuncionesCarrito;
