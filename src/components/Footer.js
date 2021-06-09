import React from 'react'
import '../css/footer.css'

/* IMAGES */
import phone from '../assets/phone.svg'
import placeholder from '../assets/placeholder.svg'
import clock from '../assets/clock.svg'
import mail from '../assets/mail.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="contatti">
                    <h3>AVVOCATO ROSSANA MARIA <br /> SANGIOVANNI</h3>
                    <div className="item">
                        <img src={phone} alt="phone icon" />
                        <a href="tel:number">055020445 (da cambiare)</a>
                    </div>
                    <div className="item" style={{marginTop: "12px"}}>
                        <img src={placeholder} alt="placeholder icon"  style={{width: "30px", marginLeft: "2px"}} />
                        <p style={{marginLeft: "-8px"}}>Via Cassia, 4 Firenze</p>
                    </div>
                    <div className="item">
                        <img src={clock} alt="clock icon"/>
                        <p>9:00 -19:00 Lun - Ven</p>
                    </div>
                    {/* <div className="item">
                        <img src={mail} alt="mail icon"/>
                        <a href="mailto:avv.sangiovannif@gmail.com">avv.sangiovannif@gmail.com</a>
                    </div> */}
                </div>
                <div className="row"></div>
                <div className="mappa"><iframe title="mappa" style={{border:"0", height: "100%", width: "100%"}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9S_ivwNUKhMR9fGqh4RDkVU&key=AIzaSyC2q-98BtvQBB07ymsKa5Y0iRcgHEcidj8"></iframe></div>
            </div>
        </footer>
    )
}

export default Footer
