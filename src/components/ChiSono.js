import React from 'react'
import '../css/chiSono.css'

/* IMAGES */
import chisono from '../assets/chiSono.jpg'

function ChiSono() {
    return (
        <div className="chiSono" id="chiSono">
            <h2>CHI SONO</h2>
            <div className="chiSono__intro">
                <div className="chiSono__intro__text">
                    <h3>Mi chiamo Rossana Maria <br /> Sangiovanni</h3>
                    <p>Mi sono <span>diplomata al liceo classico sperimentale S. Marta</span> nel (Anno) con 55/60,
                        successivamente ho conseguito la <span>laurea alla facoltà di giurisprudenza</span> il 17 0ttobre 1991 <span>presso l'Università degli Studi di Firenze</span> con tesi civilistica sulla natura del Contratto di Leasing con il voto di 93/110. <br />
                        <span> Sono iscritta all'ordine forense di Firenze dal 1999</span> dove ho sempre esercitato e svolto la mia professione. <br />
                        Forte di un'esperienza di collaborazione ultradecennale con l'Avv. Franca Guglieri nel campo del diritto civile, ho aperto un mio studio personale nelle vicinanze del Palazzo di Giustizia di Firenze.
                    </p>
                </div>
                <img src={chisono} alt="Foto Avvocato Rossana Sangiovanni" />
            </div>
        </div>
    )
}

export default ChiSono
