import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/blog.css'

import ArticleCard from './cards/ArticleCard'

class Blog extends React.Component {

    constructor(props){
        super(props)
        this.state = {articles: []}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/articles')   //https://pure-ravine-53645.herokuapp.com/articles
            .then(res => this.setState({articles: res.data}))
            .catch(err => console.log('Error: ' + err))
    }

    render(){

        function convertiData(data){
            const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
            let arr = data.substring(0,10).split('-').reverse()
            arr[1] = mesi[Number(arr[1] - 1)]
            return arr.join(' ')
        }

        return (
            <div className="blog">
                <h2>I MIEI ARTICOLI</h2>
                <div className="blog__articoli" id="blog">
                    {this.state.articles.length !== 0 ? this.state.articles.reverse().slice(0,3).map(elem => <ArticleCard key={elem._id} data={{
                        img: elem.img,
                        imgAlt: elem.imgAlt,
                        title: elem.title,
                        text: elem.text,
                        date: convertiData(elem.date)
                    }}/>) : <h3 style={{fontSize: "26px", color: "red", textAlign: "center", padding: "40px 0"}}>Errore di connessione <br /><span onClick={() => window.location.href=window.location.href} style={{textDecoration: "underline", cursor: "pointer"}}>RICARICA LA PAGINA</span></h3>}
                </div>
                <Link className="link" to="/blog">VISITA IL BLOG</Link>
            </div>
        )   
    }
}

export default Blog
