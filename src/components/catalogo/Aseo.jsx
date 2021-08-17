import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../styles/Catalogo.css";

class Aseo extends Component {
  state = {
    data: {
      productos: [],
      pedido: []
    },
  };

  componentDidMount(){
    axios
      .get("http://localhost:5000/aseo/")
      .then(res => {
        this.setState({
          data:{
            productos:res.data
          }
        });
      })
      .then(res => console.log(res.data))
      .catch(err => console.log("Error in axios: " + err.message));
  };

  handleOnclick = async (producto, e) => {
    const newOrder = {
      producto: producto.descripcion,
      precio: producto.precio
    }
    if(this.state.data.pedido == undefined){
      await this.setState({
        data:{
          productos: this.state.data.productos,
          pedido: [{ newOrder }],
        },
      })
    } else {
      await this.setState({
        data:{
          productos: this.state.data.productos,
          pedido: [{ newOrder }, JSON.stringify(this.state.data.pedido)],
        },
      })
    }
    console.log(this.state.data.pedido)
  }

  render() {
    const productos = this.state.data.productos;
    const aseo = productos.filter((cat) => cat.categoria === "aseo");
    return (
      <div className="catalogo">
        <div className="container">
          <h2 className="title">Productos</h2>
          <div className="row">
            <div className="col-2 categorias">
              <ul className="list-group">
                <li className="list-group-item text-center">
                  {" "}
                  <strong>Categorías</strong>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  <a href="aseo">Aseo</a>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  <a href="lacteos">Lácteos</a>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  <a href="fruver">Frutas y verduras</a>
                </li>
                <li className="list-group-item list-group-item-action">
                  {" "}
                  <a href="varios">Varios</a>
                </li>
              </ul>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
              <ul className="list-unstyled">
                {aseo.map((producto, index) => {
                  return (
                    <li className="container m-3" key={index}>
                      <div className="row tabla align-items-center">
                        <div className="col-4 text-center">
                          <img
                            src={`${producto.imagen}`}
                            alt={producto.descripcion}
                          />
                        </div>
                        <div className="col-5">
                          <h6> {producto.descripcion}</h6>
                          <p>Precio: ${producto.precio}</p>
                          <p>Categoría: {producto.categoria}</p>
                          <button className="btn btn-success" onClick={(e) => this.handleOnclick(producto, e)}>
                            Añadir al carrito
                          </button>
                        </div>
                        <div className="col-3">
                        <Link to="/compras">
                          <button className="btn btn-success">
                              Ir al carrito
                          </button>
                        </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aseo;
