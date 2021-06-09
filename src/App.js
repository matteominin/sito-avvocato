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
        <Footer/>
      </Route>

    </Router>
    
  )
}

export default App
