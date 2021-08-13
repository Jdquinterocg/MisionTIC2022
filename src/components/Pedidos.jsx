import React from 'react';

import './styles/Pedidos.css'
import domicilio from '../imagenes/domicilio.jpg'

class Pedidos extends React.Component {
    render() {
        const entregas = this.props.domicilios;
        
        return (
            <div className="container mt-4">
                        <div className="row">
                            <div className="col-2">
                                <img className="rounded-circle img-thumbnail" src={domicilio} alt="Domicilio" />
                            </div>
                            <div className="col-9">
                                <div>
                                    <h1 className="titulo text-center">Historial de pedidos</h1>
                                    <hr />
                                </div>
                                
                                <div className="container">
                                    <ul className="list-unstyled">
                                        {entregas.map((entrega, id) => {
                                            return (
                                                <li className="pedido mb-4" key={id}>
                                                    <div className="row">
                                                        <div className="col-4 horario">
                                                            <strong>Fecha: </strong> {entrega.fecha}
                                                            <br />
                                                            <strong>Hora: </strong> {entrega.hora}
                                                        </div>
                                                        <div className="col-8 productos">
                                                            <strong>Valor Total: </strong> ${entrega.valor}
                                                            <br />
                                                            <ul className="list-group">
                                                                <strong>Productos: </strong> 
                                                                {entrega.productos.map((producto, id) => {
                                                                    return (
                                                                        <p className="list-group" key={id}>
                                                                            {producto.name}
                                                                        </p>)
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Pedidos;