import React from 'react'
import './styles/Cards.css'


function Card({title, imageSource, desc}) {
    return (
        <div className="card text-center">
            <div className= "overflow">
                <img src={imageSource} alt="" className="card-img-top"/>
            </div>
            <div className="card-body">
                <a href="#!" className="btn btn-success btn-block">{title}</a>
                <p className="card-text text-secondary">{desc}</p>
                
            </div>
        </div>
    )
}

export default Card
