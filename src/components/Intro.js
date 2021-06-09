import React from 'react'
import'../css/intro.css'

/* IMAGES */
import img1 from '../assets/img1.jpg'
/* import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg' */

function Intro() {

    return (
        <div className="intro">
            <div className="intro__text">
                <h1><span>Studio legale</span><br />Avvocato Rossana Maria Sangiovanni</h1> 
                <p>Lo studio svolge attività di assistenza e consulenza giudiziale e stragiudiziale, cercando di assicurare ai propri assistiti rapidità nella risoluzione delle controversie, anche attraverso strumenti alternativi quali la negoziazione assistita e la mediazione civile e commerciale.
                    Tutto ciò è possibile soltanto con consulenze puntuali ed approfondite che prospettino al cliente tutte le alternative possibili per la tutela dei suoi diritti. 
                    Sono inoltre a completa disposizione per attività di mediazione stragiudiziale civile per il recupero crediti, la transazione, l’arbitrato e lo scambio di lettere.
                    <span className="hide">La costante collaborazione con professionisti specializzati in diritto penale e del lavoro, studi notarili e commerciali di fiducia, garantisce un servizio globale ed altamente specializzato in ogni ramo del diritto.</span>
                </p>
            </div>
           <img className="intro__carousel" src={img1} alt="studio immagine 1"/>
        </div>
    )
}

export default Intro
