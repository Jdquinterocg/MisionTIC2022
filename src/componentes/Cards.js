import React from 'react'
import Card from '../componentes/Card'
import Aseo from '../img/Aseo.jpg'
import Frutas from '../img/Frutas.jpg'
import Lacteos from '../img/Lacteos.jpg'
import Varios from '../img/Varios.jpg'

const caards = [
    {
        id: 1,
        title: 'Aseo',
        image: Aseo,
        desc: "Productos de aseo"
    },
    {
        id: 2,
        title: 'Frutas',
        image: Frutas,
        desc: "Frutas y verduras"
    },
    {
        id: 3,
        title: 'Lácteos',
        image: Lacteos,
        desc: "Leche, queso y mantequilla"
    },
    {
        id: 4,
        title: 'Varios',
        image: Varios,
        desc: "Productos varios"
    }
]


function cards() {
    return (
        <div className="container d-flex justify-content-center align-items-end">
            <div className="row">
                {
                    caards.map(card =>(
                        <div className="col-md-3">
                    <Card title= {card.title} imagesource={card.image} desc={card.desc}/>
                </div>
                    ))
                }
                
            </div>
            
        </div>
    )
}

export default cards
