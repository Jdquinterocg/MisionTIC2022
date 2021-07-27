import React, { Component } from "react";
import uniqid from 'uniqid';

import arroz from '../imagenes/catalogo/101.jpg'
import lentejas from '../imagenes/catalogo/111.jpg'
import frijoles from '../imagenes/catalogo/113.jpg'
import maiz from '../imagenes/catalogo/115.jpg'
import blanquillos from '../imagenes/catalogo/117.jpg'
import salero from '../imagenes/catalogo/121.jpg'
import aceite from '../imagenes/catalogo/124.jpg'
import huevos from '../imagenes/catalogo/128.jpg'
import huevo from '../imagenes/catalogo/129.jpg'
import leche from '../imagenes/catalogo/220.jpg'
import queso from '../imagenes/catalogo/224.jpg'
import papasMargarita from '../imagenes/catalogo/302.jpg'
import papa2kg from '../imagenes/catalogo/401.jpg'
import toamte from '../imagenes/catalogo/402.jpg'
import cebolla from '../imagenes/catalogo/403.jpg'
import limon from '../imagenes/catalogo/404.jpg'
import platanoMaduro from '../imagenes/catalogo/408.jpg'
import agua from '../imagenes/catalogo/502.jpg'
import gaseosaManzana from '../imagenes/catalogo/508.jpg'
import salchicha from '../imagenes/catalogo/601.jpg'
import paletaUva from '../imagenes/catalogo/701.jpg'
import heladoLulo from '../imagenes/catalogo/713.jpg'
import cepillo from '../imagenes/catalogo/801.jpg'
import escoba from '../imagenes/catalogo/809.jpg'
import trapeador from '../imagenes/catalogo/810.jpg'
import jabon from '../imagenes/catalogo/817.jpg'

class Catalogo extends Component {
  state = {
    data:{

     productos: [
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Arroz Diana 500g",
        precio: 1900,
        imagen: arroz,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Lentejas Frescampo 500g",
        precio: 2710,
        imagen: lentejas,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Frijoles Frescampo 500g",
        precio: 3890,
        imagen: frijoles,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Maiz Pira Frescampo 500g",
        precio: 2800,
        imagen: maiz,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Blanquillos Frescampo 500g",
        precio: 3410,
        imagen: blanquillos,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Salero Sal Refrisal 130g",
        precio: 920,
        imagen: salero,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Aceite Frescampo 900cc",
        precio: 5880,
        imagen: aceite,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Huevos 30unds",
        precio: 14000,
        imagen: huevos,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Huevo 1und",
        precio: 600,
        imagen: huevo,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Papas Margarita Natural 120g",
        precio: 4500,
        imagen: papasMargarita,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Botella Agua Brisa 600cc",
        precio: 1500,
        imagen: agua,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Gaseosa Postobon Manzana 1500cc",
        precio: 3000,
        imagen: gaseosaManzana,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Salchicha Rica 500g",
        precio: 5500,
        imagen: salchicha,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Paleta Uva",
        precio: 1500,
        imagen: paletaUva,
      },
      {
        id: uniqid(),
        categoria: "varios",
        descripcion: "Helado Lulo",
        precio: 3000,
        imagen: heladoLulo,
      },
      {
        id: uniqid(),
        categoria: "lacteos",
        descripcion: "Leche Alqueria Deslactosada 1100cc",
        precio: 3800,
        imagen: leche,
      },
      {
        id: uniqid(),
        categoria: "lacteos",
        descripcion: "Queso Cuajada 500g",
        precio: 4500,
        imagen: queso,
      },
      {
        id: uniqid(),
        categoria: "frutasyverduras",
        descripcion: "Papa 2000g",
        precio: 9000,
        imagen: papa2kg,
      },
      {
        id: uniqid(),
        categoria: "frutasyverduras",
        descripcion: "Tomate 1000g",
        precio: 3500,
        imagen: toamte,
      },
      {
        id: uniqid(),
        categoria: "frutasyverduras",
        descripcion: "Cebolla 500g",
        precio: 3000,
        imagen: cebolla,
      },
      {
        id: uniqid(),
        categoria: "frutasyverduras",
        descripcion: "Limon 1000g",
        precio: 3900,
        imagen: limon,
      },
      {
        id: uniqid(),
        categoria: "frutasyverduras",
        descripcion: "Platano Maduro 1000g",
        precio: 2500,
        imagen: platanoMaduro,
      },
      {
        id: uniqid(),
        categoria: "aseo",
        descripcion: "Cepillo Dental Colgate",
        precio: 4000,
        imagen: cepillo,
      },
      {
        id: uniqid(),
        categoria: "aseo",
        descripcion: "Escoba",
        precio: 10000,
        imagen: escoba,
      },
      {
        id: uniqid(),
        categoria: "aseo",
        descripcion: "Trapeador 250g",
        precio: 9500,
        imagen: trapeador,
      },
      {
        id: uniqid(),
        categoria: "aseo",
        descripcion: "Jabon Johnson Avena 110g",
        precio: 1500,
        imagen: jabon,
      },
    ],
    }
  };

  render() {
    const productos = this.state.data.productos;
    return (
      <div className="catalogo">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ul className="list-unstyled">
                <li>Aseo</li>
                <li>Lacteos</li>
                <li>Frutas y verduras</li>
                <li>Varios</li>
              </ul>
            </div>

            <div className="col-9">
              <ul className="list-unstyled">
                  {productos.map(producto => {
                      return (
                        <li className="mb-5" key={producto.id}>
                            <div className="row">
                                <div className="col">
                                    <img src={`${producto.imagen}`} alt={producto.descripcion} />
                                </div>
                                <div className="col">
                                    <h6>Descripción: {producto.descripcion}</h6>
                                    <p>Precio: ${producto.precio}</p>
                                    <p>Categoría: {producto.categoria}</p>
                                    <button className="btn btn-success">Añadir al carrito</button>
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

export default Catalogo;
