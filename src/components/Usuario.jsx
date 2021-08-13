import React from 'react'

import './styles/Usuario.css'
import perfil from '../imagenes/Foto.jpeg'

class Usuario extends React.Component {
    render(){
        const usuario = this.props;
            return (
                <div className="Hero">
                    <div className="row">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="container usuario">
                                <div className="row">
                                    <div className="col-2">
                                        <img className="perfil" src={perfil} alt="Foto de perfil" />
                                    </div>
                                    <div className="col-9">
                                        <div>
                                            <h1 className="titulo text-center">Información General</h1>
                                            <hr />
                                        </div>
                                        
                                        <div className="container">
                                            <div className="row general">
                                                <div className="col-6 info">
                                                    <p> <strong>Nombre: </strong> {usuario.nombre} {usuario.apellido} </p>
                                                    
                                                    <p> <strong>Cédula: </strong> {usuario.cedula} </p>
                                                </div>
                                                <div className="col-6 info">
                                                    <p> <strong>Dirección: </strong> {usuario.direccion} </p>
                                                    
                                                    <p> <strong>Teléfono </strong> {usuario.telefono} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            )
        }
    }

export default Usuario
