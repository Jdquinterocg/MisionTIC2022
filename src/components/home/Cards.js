import React from 'react'
import Card from './Card'

import Aseo from '../../imagenes/categorias-home/Aseo.jpg'
import Frutas from '../../imagenes/categorias-home/Frutas.jpg'
import Lacteos from '../../imagenes/categorias-home/Lacteos.jpg'
import Varios from '../../imagenes/categorias-home/Varios.jpg'

import '../styles/Cards.css'

const cards = [
    {
        id: 1,
        title:'Aseo',
        image: Aseo,
        desc: "Productos de aseo",
        enlace:"aseo",

    },
    {
        id:2,
        title:'Frutas',
        image: Frutas,
        desc: "Frutas y verduras",
        enlace:"fruver",
    },
    {
        id:3,
        title:'Lacteos',
        image: Lacteos,
        desc: "Leche, queso y mantequilla",
        enlace:"lacteos",
    },
    {
        id:4,
        title:'Varios',
        image: Varios,
        desc: "Productos varios",
        enlace:"varios",
    }
]

function Cards() {
    return (
        <div className="container align-items-center">
            <div className="row"><p></p></div>
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} desc={card.desc} enlace={card.enlace}/>
                            
                        </div>
                    ))
                }        
              
            </div>
            <div className="row"><p></p></div>
            <div className="row"><p></p></div>
            <div className="row"><p></p></div>
            
        </div>
    )
}

export default Cards
