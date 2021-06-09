import React from 'react'
import {Link} from 'react-router-dom'
import '../css/esperto.css'

import Card from './cards/EspertoCards'

/* IMAGES */
import anelli from '../assets/anelli.jpg'

/* PDF */
import preventivo from '../assets/preventivo.pdf'

function Esperto() {
    return (
        <div className="esperto">
            <h2>ESPERTO IN</h2>
            <div className="grid">
                <Card style={{gridArea: "elem1"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Diritto di Famiglia",
                    text: "Separazioni e Divorzi giudiziali, consensuali e tramite negoziazione assistita. Unioni civili, patti prematrimoniali, mediazione familiare, modifica delle condizioni di separazione e divorzio. Recupero credito per mancato versamento assegno di mantenimento"
                }}/>
                <Card style={{gridArea: "elem2"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <Card style={{gridArea: "elem3"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <Card style={{gridArea: "elem4"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <Card style={{gridArea: "elem5"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <Card style={{gridArea: "elem6"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <Card style={{gridArea: "elem7"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "DIVORZI",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione velit harum et beatae, quia facilis doloribus reiciendis odit placeat impedit praesentium cumque nisi eos ex odio! Quis, nulla quae?"
                }}/>
                <div className="grid__cta" style={{gridArea: "cta"}}>
                    <p>Lo Studio, fornisce un primo incontro conoscitivo gratuito ed al momento del conferimento dell'incarico fornisce un preventivo relativo ai costi dell’attività da svolgere illustrando altresì il grado di complessità della prestazione.</p>
                    <Link className="contatti" to="/contatti">Contattami</Link>
                    <p className="preventivo">(Il preventivo sarà stilato in base all'attività legale che dovrà essere svolta ed ai <a className="preventivoFile" href={preventivo} target="blank">parametri ministeriali disciplinati dal DM 55/2014</a> e relativo aggiornamento del DM 37/2018)</p>
                </div>
            </div>
        </div>
    )
}

export default Esperto
