import React from 'react';

import './styles/Pedidos.css'
import domicilio from '../imagenes/domicilio.jpg'

class Pedidos extends React.Component {
    render() {
        const entregas = this.props.domicilios;
        
        return (
            <div className="container mt-5">
                        <div className="row">
                            <div className="col-3">
                                <img className="rounded-circle img-thumbnail" src={domicilio} alt="Domicilio" />
                            </div>
                            <div className="col-9">
                                <div>
                                    <h1 className="titulo">Historial de pedidos</h1>
                                    <hr />
                                </div>
                                
                                <div className="container">
                                    <ul className="list-unstyled">
                                        {entregas.map((entrega) => {
                                            return (
                                                <li className="pedido mb-5" key={entrega.id}>
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
                                                                <strong>Productos: </strong> {entrega.productos.map((producto) => {
                                                                    return (
                                                                        <p className="list-group-item pedido-producto" key={producto.id}>
                                                                            {producto.name}
                                                                        </p>)
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <br />
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