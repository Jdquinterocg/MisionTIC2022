import React from "react";

import './styles/Footer.css'

import facebook from '../imagenes/redes/facebook.png'
import github from '../imagenes/redes/github.png'
import twitter from '../imagenes/redes/twitter.png'
import linkedin from '../imagenes/redes/linkedin.png'
import instagram from '../imagenes/redes/instagram.png'

function Footer() {
  return (
    <div>
      <footer className="Footer text-center text-lg-start">

        {/* Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
          <div className="me-5 d-none d-lg-block">
            <span>Conectate con nosotros por nuestras redes sociales:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <img href='/' src={facebook} alt="Logo" className="fab fa-facebook-f mr-3" width="30" height="30"></img>
            </a>
            <a href="/" className="me-4 text-reset">
              <img href='/' src={twitter} alt="Logo" className="fab fa-twitter mr-3" width="30" height="30"></img>
            </a>
            <a href="/" className="me-4 text-reset">
              <img href='/' src={instagram} alt="Logo" className="fab fa-instagram mr-3" width="30" height="30"></img>
            </a>
            <a href="/" className="me-4 text-reset">
              <img href='/' src={linkedin} alt="Logo" className="fab fa-linkedin mr-3" width="30" height="30"></img>
            </a>
            <a href="/" className="me-4 text-reset">
              <img href='/' src={github} alt="Logo" className="fab fa-github mr-3" width="30" height="30"></img>
            </a>
          </div>
        </section>
        
    <section>
        
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
                
                {/* Empresa */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Tienda doña Paquita
                    </h6>
                    <p>
                        Estamos en la lucha de la inclusión e igualdad de oportunidades, por este motivo conectamos
                        tiendas de barrio con futuros clientes.
                    </p>
                </div>
                
                {/* Categorías */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                        Categorías
                    </h6>
                    <p>
                        <a href="/" className="text-reset">Aseo</a>
                    </p>
                    <p>
                        <a href="/" className="text-reset">Frutas y Verduras</a>
                    </p>
                    <p>
                        <a href="/" className="text-reset">Lacteos</a>
                    </p>
                    <p>
                        <a href="/" className="text-reset">Varios</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                        </h6>
                        <p>Colombia</p>
                        <p>info@example.com</p>
                        <p>3043861159</p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    </footer>
      
    </div>
  );
}

export default Footer;
