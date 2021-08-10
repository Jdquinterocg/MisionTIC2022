import React from "react";
import { Link } from "react-router-dom";

import './styles/Footer.css'

import facebook from '../imagenes/redes/facebook.png'
import github from '../imagenes/redes/github.png'
import twitter from '../imagenes/redes/twitter.png'
import linkedin from '../imagenes/redes/linkedin.png'
import instagram from '../imagenes/redes/instagram.png'
import MinTIC from '../imagenes/MinTIC.png'
import Mision from '../imagenes/MisionTIC.png'
import UTP from '../imagenes/UTP.png'

function Footer() {
  return (
    <div>
      <footer className="Footer text-center">

        {/* Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
          <div className="me-5 d-none d-lg-block">
            <span>Conéctese con nosotros a través de nuestras redes sociales:</span>
          </div>

          <div>
            <Link to="/" className="me-4 text-reset">
              <img to='/' src={facebook} alt="Logo" className="fab fa-facebook-f mr-3" width="30" height="30"></img>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <img to='/' src={twitter} alt="Logo" className="fab fa-twitter mr-3" width="30" height="30"></img>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <img to='/' src={instagram} alt="Logo" className="fab fa-instagram mr-3" width="30" height="30"></img>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <img to='/' src={linkedin} alt="Logo" className="fab fa-linkedin mr-3" width="30" height="30"></img>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <img to='/' src={github} alt="Logo" className="fab fa-github mr-3" width="30" height="30"></img>
            </Link>
          </div>
        </section>
        
    <section>
        <div className="container text-center text-md-start mt-4">
            <div className="row">
                
                {/* Empresa */}
                <div className="col-3">
                    <h6 className="text-uppercase fw-bold mb-3">
                        Tienda doña Paquita
                    </h6>
                    <p>
<<<<<<< HEAD
                        Estamos en la lucha de la inclusión e igualdad de oportunidades, por este motivo conectamos tiendas de barrio con futuros clientes.
                    </p>
                </div>
                
                {/* Categorías */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        Categorías
                    </h6>
                    <p>
                        <Link to="/" className="text-reset">Aseo</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Frutas y Verduras</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Lacteos</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Varios</Link>
=======
                        Facilitamos la conexión de las tiendas de barrio con sus clientes
>>>>>>> 5d3777f9d3da07bbb2c27c5f79df3cf5ceb34fae
                    </p>
                </div>

                {/* Contacto */}
                    <div className="col">
                        <h6 className="text-uppercase fw-bold mb-3">
                            Contacto
                        </h6>
                        <p> Dirección: Colombia</p>
                        <p> Correo electrónico: info@paquita.com</p>
                        <p> Teléfono: 304 386 1159</p>
                    </div>
                

                {/* Desarrolladores */}
                <div className="col-4 text-end align-items-end">
                  <p> 
                    <br /> 
                    <br /> 
                    <br />
                  </p>
                  <img src={MinTIC} alt="Logo"></img>
                  <img src={Mision} alt="Logo" ></img>
                  <img src={UTP} alt="Logo"></img>
                </div>
            </div>
        </div>

    </section>

    </footer>
      
    </div>
  );
}

export default Footer;
