import React from 'react'

import perfil from '../imagenes/Foto.jpeg'

class Usuario extends React.Component {
    render(){
        const usuario = this.props;
            return (
                <div>
                    <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <img className="rounded-circle img-thumbnail" src={perfil} alt="Foto de perfil" />
                                    </div>
                                    <div className="col-9">
                                        <div>
                                            <h1>Información General</h1>
                                            <hr />
                                        </div>
                                        
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-6">
                                                    <strong>Nombre: </strong> {usuario.nombre} {usuario.apellido}
                                                    <br />
                                                    <strong>Cédula: </strong> {usuario.cedula}
                                                </div>
                                                <div className="col-6">
                                                    <strong>Dirección de residencia: </strong> {usuario.direccion}
                                                    <br />
                                                    <strong>Teléfono </strong> {usuario.telefono}
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
