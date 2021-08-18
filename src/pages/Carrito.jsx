import React, { Component } from "react";
import axios from "axios";

import FuncionesCarrito from "../components/carrito/FuncionesCarrito";

class Carrito extends Component {
  //   producto1 = {
  //     id: uniqid(),
  //     nombre: "leche",
  //     precio: 2100,
  //     cantidad: 2, //Viene de la base de datos
  //   };

  //   producto2 = {
  //     id: uniqid(),
  //     nombre: "huevos",
  //     precio: 300,
  //     cantidad: 12, //Viene de la base de datos
  //   };

  state = {
    data: {
      productos: [],
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/compras/")
      .then((res) => {
        this.setState({
          data: {
            productos: res.data,
          },
        });
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log("Error in axios (carrito): " + err.message));
  }

  render() {
    const carro = this.state.data.productos[0].pedidos;
    console.log(carro)

    let total = 0;
    for (let i in carro) {
      if (carro.newOrder) {
        carro[i] = carro[i].newOrder[0];
      }
      let subtotal = carro[i].precio * carro[i].cantidad;
      total += subtotal;
    }
    return (
      <div>
        <FuncionesCarrito carro={carro} total={total} />
      </div>
    );
  }
}

export default Carrito;
