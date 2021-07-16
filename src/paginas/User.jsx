import React from 'react'
import uniqid from 'uniqid'

import Usuario from '../components/Usuario'
import Pedidos from '../components/Pedidos'

class User extends React.Component {
    
    entrega1 = {
        id:uniqid(),
        fecha: '12 de Julio 2021',
        hora: '7:30 pm',
        valor: 12000,
        productos: [
            {name: 'arroz', id: uniqid()},
            {name: 'leche', id: uniqid()},
            {name: 'Queso', id: uniqid()}]
    }
    
    entrega2 = {
        id:uniqid(),
        fecha: '5 de Julio 2021',
        hora: '7:30 pm',
        valor: 1000,
        productos: [{name: 'Choclitos', id: uniqid()}]
    }
    
    state = {
        data: {
            usuario:{
                nombre: 'Juan Diego',
                apellido: 'Quintero Calderón',
                direccion: 'Manizales',
                cedula: 12345678,
                telefono: 3043861159
            },
            domicilio:[this.entrega1, this.entrega2]
        },
    }

    render() {
        const user = this.state.data.usuario;
        const domicilios = this.state.data.domicilio;
        console.log(domicilios);
        return (
            <div>
                <div className="Header">
                    Tienda Doña Paquita
                </div>

                <Usuario 
                    nombre={user.nombre}
                    apellido={user.apellido}
                    direccion={user.direccion} 
                    cedula={user.cedula} 
                    telefono={user.telefono}
                    />

                <Pedidos domicilios={domicilios} />
                    

                <div className="Footer">
                    Footer
                </div>
            </div>
        )
    }
}

export default User
