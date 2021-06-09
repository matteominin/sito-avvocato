import React  from 'react'
import {Link} from 'react-router-dom'
import '../css/test.css'

/* IMAGES */
import logo from '../assets/logo.PNG'

function Header() {

    return (
        <>
            <header className="test">
                <Link className="test__img" to="/"><img src={logo} alt="logo" /></Link>
                <nav className="test__menu">
                    <Link className="test__menu__item" to="/">Home</Link>
                    <Link className="test__menu__item" to="/blog">Blog</Link>
                    <a className="test__menu__item" href="/#chiSono">Chi sono</a>
                    {/* <Link className="test__menu__item" to="/#chiSono">Chi sono</Link> */}
                    
                </nav>
                <Link className="test__cta" to="/contatti">Contatti</Link>
            </header>

            <header className="header__mobile">
                <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>
                    
                    <ul id="menu">
                        <a href="/"><li>Home</li></a>
                        <a href="/blog"><li>Blog</li></a>
                        <a href="/#chisiamo"><li>Chi sono</li></a>
                        <a href="/contatti" style={{textAlign: 'center'}}><li style={{backgroundColor:"#a680ba", width: "250px", borderRadius: "20px",marginTop: "20px"}}>Contatti</li></a>
                    </ul>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header
