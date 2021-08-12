import React from 'react'
import axios from 'axios';

import Usuario from '../components/Usuario'
import Pedidos from '../components/Pedidos'

import './styles/User.css'


class User extends React.Component {
    
        state = {
                usuario:[],
                domicilio:[]
        }
        
            componentDidMount() {
                axios.get('http://localhost:4000/usuario/')
                    .then((response) => this.setState({
                            usuario: response.data,
                    }))
                    // .then(res => console.log('Response axios users:' + res.data))
                    .catch(err => console.log('Error in axios: ' + err.message));
                
                axios.get('http://localhost:4000/domicilios/')
                    .then((response) => this.setState({
                            domicilio: response.data
                    }))
                    // .then(res => console.log('Response axios domicilios:' + res.data))
                    .catch(err => console.log('Error in axios: ' + err.message));
}
        
    render() {
        const user = this.state.usuario;
        const domicilios = this.state.domicilio;
        return (
            <div className="Hero">

                { user.map((user, key) => {
                    return (
                        <Usuario key = {key}
                            nombre={user.nombre}
                            apellido={user.apellido}
                            direccion={user.direccion} 
                            cedula={user.cedula} 
                            telefono={user.telefono}
                            />
                    )
                })
}
                <Pedidos domicilios={domicilios} />
            </div>
        )
    }
}

export default User
