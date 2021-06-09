import React from 'react'
import '../../css/espertoCard.css'

function EspertoCards(props) {
    return (
        <div className="espertoCard">
            <img src={props.data.img} alt={props.data.alt}/>
            <div className="opacity"></div>
            <div className="text">
                <h3>{props.data.title.toUpperCase()}</h3>
                <p>{props.data.text}</p>
            </div>
        </div>
        
    )
}

export default EspertoCards
