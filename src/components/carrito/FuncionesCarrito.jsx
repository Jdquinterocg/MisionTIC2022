import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "../styles/Carrito.css";

// parámetro -> total
function FuncionesCarrito(props) {
  const carrito = props.carro;
  console.log(carrito)

  const handleOnclick = (e) => {
    console.log('Here I am')
    const time = Date.now();
    const today = new Date(time);
    
    const date = today.toLocaleDateString();
    const hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); 

    const newOrder = {
      fecha: date,
      hora: hour,
      valor: props.total,
      productos: props.array,
    }
    axios
      .post("http://localhost:5000/saveDomicilio/", newOrder)
      .then(() => console.log('Order sent to user'))
      .catch((err) => console.log("Error in axios (Sending domi)" + err.message))
  }

  return (
    <div className="carrito">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Carrito de Compras</h2>
          <div className="tabla">
            <div className="row">
              <div className="col">
                <strong>Producto</strong>
              </div>
              <div className="col">
                <strong>Precio</strong>
              </div>
              <div className="col">
                <strong>Cantidad</strong>
              </div>
              <div className="col">
                <strong>Subtotal </strong>
              </div>
              <div className="col-1"></div>
              <div className="col-1"></div>
            </div>
            <hr />

            {/* Map */}
            <ul className="list-unstyled">
              {carrito.map((producto, index) => {
                if(producto.newOrder) { 
                  producto = producto.newOrder[0];
                }
                return (
                  <li key={index}>
                    <div className="text-center">
                      <div className="row align-items-center">
                        <div className="col">{producto.producto}</div>
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

            <div className="row justify-content-end">
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
          <button className="button float-end m-1" onClick={handleOnclick}> Recoger en tienda </button>
        </Link>
        <Link to="/domi">
          <button className="button float-end m-1" onClick={handleOnclick}> Pedir a domicilio </button>
        </Link>
      </div>
    </div>
  );
}

export default FuncionesCarrito;
