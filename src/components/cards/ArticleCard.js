import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/articleCard.css'

function ArticleCard(props) {
    return (
        <div className="articleCard">
            <div className="articleCard__imgContainer">
               <img src={props.data.img} alt={props.data.imgAlt} /> 
            </div>
            <div className="articleCard__row"></div>
            <div className="articleCard__text">
                <h3>{props.data.title.toUpperCase()}<span>{props.data.date}</span></h3>
                <p>{props.data.text.substring(0,400) + '...'}</p>
                {/* <Link to={"/blog/articoli/" + props.data.title.replace(/ /g, '-').replace(/'|,/g, '').toLowerCase()}>Leggi</Link> */}
                <Link to={"/blog/articoli/" + props.data._id}>Leggi</Link>
            </div>
        </div>
    )
}

export default ArticleCard
