import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

/* COMPONENTS */
import Header from './components/Header'
import Intro from './components/Intro'
import Esperto from './components/Esperto'
import Blog from './components/Blog'
import ChiSono from './components/ChiSono'
import Fromazione from './components/Formazione'
import Footer from './components/Footer'
import Contatti from './components/Contatti'

/* ADMIN */
import AdminPage from './components/admin/AdminPage'
import AdminCorso from './components/admin/AdminCorso'
import AdminArticolo from './components/admin/AdminArticolo'

/* BLOG */
import Home from './components/blog/Home'
import Article from './components/blog/Article'

import Carousel from './components/Carousel'

function App() {
  return (
    <Router>
      <Header/>

      <Route path="/" exact>
        <Intro/>
        <Esperto/>
        <Blog/>
        <ChiSono/>
        <Fromazione/>
      </Route>

      <Route path="/admin" exact>
        <AdminPage/>
      </Route>

      <Route path="/admin/corso" component={AdminCorso} exact/>

      <Route path="/admin/articolo" component={AdminArticolo} exact/>

      <Route path="/contatti" component={Contatti} exact/>

      <Route path="/blog" component={Home} exact/>

      <Route path="/blog/articoli" component={Article}/>

      <Route path="/error">
        <h1 style={{textAlign: "center", color: "#7e3e98"}}>Error 404</h1>
      </Route>

      <Footer/>
    </Router>
    
  )
}

export default App
