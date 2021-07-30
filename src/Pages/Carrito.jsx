
import React, { Component } from 'react';
import uniqid from 'uniqid';
import FuncionesCarrito from '../components/FuncionesCarrito';

class Carrito extends Component {

    producto1 = {
        id:uniqid(),
        nombre: 'leche',
        precio: 2100,
        cantidad: 2, //Viene de la base de datos
    }

    producto2 = {
        id:uniqid(),
        nombre: 'huevos',
        precio: 300,
        cantidad: 12, //Viene de la base de datos
    }

    state = {
        data: {
            productos:[this.producto1, this.producto2]
        },
        }  
        
    render() {
        const carro = this.state.data.productos

        let total = 0
        for(let i in carro){  
        let subtotal = carro[i].precio*carro[i].cantidad
        total += subtotal
        }
        return (
            <div>
               <FuncionesCarrito carro={carro} total={total}/>
            </div>
        );
    }
}

export default Carrito;