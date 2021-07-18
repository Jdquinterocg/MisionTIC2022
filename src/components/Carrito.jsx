
import React, { Component } from 'react';
import uniqid from 'uniqid'


class Carrito extends Component {

    producto1 = {
        id:uniqid(),
        nombre: 'leche',
        precio: 2100,
        cantidad: 1,
        subtotal: 2100,
    }

    producto2 = {
        id:uniqid(),
        nombre: 'huevos',
        precio: 300,
        cantidad: 3,
        subtotal: 900,
    }

    state = {
        data: {
            productos:[this.producto1, this.producto2]
        },
        }

    render() {
        const carrito = this.state.data.productos;
        return (
            <div>
                <div className="container">
                <div className="text-center">
                <h2>Carrito de Compras</h2>
                <br />
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
                    </div> 
                    <hr />
                </div>

                <ul className="list-unstyled">
                    {carrito.map((producto) => {
                        return (
                            <li key={producto.id}>
                                <div className="text-center">
                                <div className="row">
                                <div className="col">{producto.nombre}</div>
                                <div className="col">${producto.precio}</div>
                                <div className="col">
                                    <button className="btn btn-light btn-sm">-</button> 
                                    {producto.cantidad} 
                                    <button className="btn btn-light btn-sm">+</button>
                                </div>
                                <div className="col">${producto.subtotal}</div>
                                </div>
                                </div>
                            </li>
                                )
                                    })}
                </ul>
        
            <button class="btn btn-outline-info"> Seleccionar más productos </button>
            <button class="btn btn-outline-danger float-end"> Caja registradora </button>
                </div>
            </div>
        );
    }
}

export default Carrito;