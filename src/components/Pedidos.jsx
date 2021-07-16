import React from 'react';

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
                                    <h1>Historial de pedidos</h1>
                                    <hr />
                                </div>
                                
                                <div className="container">
                                    <ul className="list-unstyled">
                                        {entregas.map((entrega) => {
                                            return (
                                                <li key={entrega.id}>
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <strong>Fecha: </strong> {entrega.fecha}
                                                            <br />
                                                            <strong>Hora: </strong> {entrega.hora}
                                                        </div>
                                                        <div className="col-6">
                                                            <strong>Valor Total: </strong> ${entrega.valor}
                                                            <br />
                                                            <ol className="list-group list-group-numbered">
                                                                <strong>Productos: </strong> {entrega.productos.map((producto) => {
                                                                    return (
                                                                        <p className="list-group-item" key={producto.id}>
                                                                            {producto.name}
                                                                        </p>)
                                                                })}
                                                            </ol>
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