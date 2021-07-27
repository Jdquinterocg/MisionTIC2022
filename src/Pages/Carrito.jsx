
import React, { Component } from 'react';
import uniqid from 'uniqid';
import FuncionesCarrito from '../components/FuncionesCarrito';

class Carrito extends Component {

    producto1 = {
        id:uniqid(),
        nombre: 'leche',
        precio: 2100,
        cantidad: 1, //Viene de la base de datos
    }

    producto2 = {
        id:uniqid(),
        nombre: 'huevos',
        precio: 300,
        cantidad: 3, //Viene de la base de datos
    }

    state = {
        data: {
            productos:[this.producto1, this.producto2]
        },
        }  
 
    render() {
        const carro = this.state.data.productos

        return (
            <div>
               <FuncionesCarrito carro={carro}/>
            </div>
        );
    }
}

export default Carrito;