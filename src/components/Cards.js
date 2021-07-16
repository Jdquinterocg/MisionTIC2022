import React from 'react'
import Card from './Card'

import Aseo from '../assets/Aseo.jpg'
import Frutas from '../assets/Frutas.jpg'
import Lacteos from '../assets/Lacteos.jpg'
import Varios from '../assets/Varios.jpg'

const cards =[
    {
        id: 1,
        title:'Aseo',
        image: Aseo,
        desc: "Productos de aseo"

    },
    {
        id:2,
        title:'Frutas',
        image: Frutas,
        desc: "Frutas y verduras"
    },
    {
        id:3,
        title:'Lacteos',
        image: Lacteos,
        desc: "Leche, queso y mantequilla"
    },
    {
        id:4,
        title:'Varios',
        image: Varios,
        desc: "Productos varios"
    }
]

function Cards() {
    return (
        <div className="container d-flex  align-items-center h-50">
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-3" key={card.id}>
                            <Card title={card.title} imageSource={card.image} desc={card.desc}/>
                            
                        </div>
                    ))
                }        
              
            </div>
            
        </div>
    )
}

export default Cards
