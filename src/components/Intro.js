import React, {useState, useEffect} from 'react'
import'../css/intro.css'

/* IMAGES */
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

let interval;
const images = [img1, img2, img3]

function Intro(){
    const [slide, setSlide] = useState(0)

    let style = {
        dot1: slide == 0 ? 'active' : 'no',
        dot2: slide == 1 ? 'active' : 'no',
        dot3: slide == 2 ? 'active' : 'no'
    }

    const NextSlide = () =>
            setSlide((prev) => (slide === images.length - 1 ? 0 : prev + 1));

    useEffect(() => {
        interval = setInterval(() => {
            NextSlide()
            clearInterval(interval)
        }, 2000)   
        return () => {
            clearInterval(interval)
        }
    }, [slide])

    
        
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
            <div className="carousel">
                <img className="intro__carousel" src={images[slide]} alt="studio immagine 1"/>
                <div className="dot">
                    <span className={style.dot1}></span>
                    <span className={style.dot2}></span>
                    <span className={style.dot3}></span>
                </div>
            </div>
            
        </div>
    )  
}

export default Intro
