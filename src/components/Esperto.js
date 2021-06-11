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
                    title: "Diritto di proprietà",
                    text: "Tutela legale nelle controversie condominiali e nel diritto delle locazioni, sia nella fase stragiudiziale che nella procedura di mediazione, sino all’eventuale giudizio e/o procedimento di sfratto. Assistenza nella tutela del diritto di proprietà e nella stesura di contratti di acquisto e vendita di immobili"
                }}/>
                <Card style={{gridArea: "elem3"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Risarcimento danni",
                    text: "Tutela delle pretese risarcitorie dei clienti che abbiano subito un danno alla propria sfera giuridica, patrimoniale e non patrimoniale, derivante da rapporti contrattuali ed extracontrattuali"
                }}/>
                <Card style={{gridArea: "elem4"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Contrattualistica",
                    text: "Consulenza ed assistenza professionale per la redazione e la revisione di accordi, contratti, scritture private ed atti pubblici. Tutela del cliente dalla fase preparatoria preliminare sino alla stipula ed all’esecuzione del contratto"
                }}/>
                <Card style={{gridArea: "elem5"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Responsabilità Medica e Professionale",
                    text: "Attività di assistenza relativa a danni da responsabilità professionale in generale e responsabilità medica delle strutture sanitarie pubbliche e private e/o dei professionisti del settore, accertamento e quantificazione dei danni subiti"
                }}/>
                <Card style={{gridArea: "elem6"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Mediazione e Negoziazione Assistita",
                    text: "Assistenza all’interno delle procedure alternative al giudizio. Valutazione del possibile successo della mediazione civile e commerciale e della negoziazione assistita, nell’interesse del cliente e finalizzata al raggiungimento del miglior risultato"
                }}/>
                <Card style={{gridArea: "elem7"}} data={{
                    img: anelli,
                    alt: "immagine divorzi",
                    title: "Domiciliazioni",
                    text: "Il Servizio di domiciliazione legale è rivolto ai colleghi avvocati di altri fori che necessitano di essere sostituiti in udienza e/o di svolgere delle attività presso gli uffici giudiziari di Prato, Firenze e Pistoia"
                }}/>
            </div>
            <div className="grid__cta" style={{gridArea: "cta"}}>
                    <p>Lo Studio, fornisce un primo incontro conoscitivo gratuito ed al momento del conferimento dell'incarico fornisce un preventivo relativo ai costi dell’attività da svolgere illustrando altresì il grado di complessità della prestazione.</p>
                    <Link className="contatti" to="/contatti">Contattami</Link>
                    <p className="preventivo">(Il preventivo sarà stilato in base all'attività legale che dovrà essere svolta ed ai <a className="preventivoFile" href={preventivo} target="blank">parametri ministeriali disciplinati dal DM 55/2014</a> e relativo aggiornamento del DM 37/2018)</p>
                </div>
        </div>
    )
}

export default Esperto
