import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../styles/Carrito.css";;

class ConfirmaRecogida extends Component {
    
    render() {
        
        return (
          <div className="container confirma">
          <div className="col-3 aviso align-itenms-center">
            <div className="row"><h2>Listo!</h2></div>
            <div className="row"><h3>Ya puede recoger su pedido</h3></div>
            <Link to="/">
            <button className="button m-1"> Cerrar </button>
            </Link>
          </div>
        </div>  
        );
    }
}

export default ConfirmaRecogida;
