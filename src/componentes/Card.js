import React from 'react'
import './cards.css'


function card({title, imagesource, desc}) {
    return (
        <div className="card text-center ">
            <div className= "overflow">
                <img src={imagesource} alt="" className="card-img-top"/>
            </div>
            
            <div className= "card-body">
                <a href="#!" className="btn btn-success ">
                    {title} 
                </a>
                
                <p className= "card-text text-secondary">
                    {desc}
                </p>
                
            </div>
            
        </div>
    )
}

export default card
