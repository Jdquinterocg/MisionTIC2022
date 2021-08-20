import React, { Component } from "react";
import axios from "axios";
import FuncionesCarrito from "../components/carrito/FuncionesCarrito";

class Carrito extends Component {
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
    const carro =
      this.state.data.productos._id !== undefined
        ? this.state.data.productos.pedidos
        : [];

    let total = 0;
    let namesArray = [];
    for (let i in carro) {
      let subtotal = carro[i].precio * carro[i].cantidad;
      total += subtotal;
      namesArray = [...namesArray, carro[i].producto];
      // console.log(namesArray)
    }
    return (
      <div>
        <FuncionesCarrito carro={carro} total={total} array={namesArray} />
      </div>
    );
  }
}

export default Carrito;
