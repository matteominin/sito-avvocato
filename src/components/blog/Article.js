import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../css/blog/article.css'
import Sidebar from './Sidebar'


export default class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            article: {},
            articoli: []
        }
    }

    componentDidMount(){
        let id = window.location.pathname.replace('/blog/articoli/', '')

        axios.get('https://avvocatoo.herokuapp.com/articles/' + id)
            .then(res => this.setState({article: res.data}))
            .catch(err => console.log('Error: ' + err))
        
        axios.get('https://avvocatoo.herokuapp.com/articles/')
            .then(res => this.setState({articoli: res.data}))
            .catch(err => console.log('Error: ' + err))
    }

    render() {
        return (
            <div className="articolo">
                <div className="articolo__intro">
                    <img src="https://www.generazionepost.it/wp-content/uploads/2019/11/lontra.jpg" alt="immagine intro Articolo" />
                    <h1>{this.state.article.title}</h1>
                </div>
                <div className="content">
                    <div className="articolo__text">
                        <div className="imgCont">
                            <img src={this.state.article.img} alt= {this.state.article.imgAlt} />
                        </div>
                        <p>{this.state.article.text}</p>
                        <Link className="articolo__button" to="/blog">Vai al blog</Link> 
                    </div>
                                   
                    <div className="sidebar">
                        <h3>Ultimi articoli</h3>
                        <ul>
                            {this.state.articoli.map(elem => {return elem._id !== this.state.article._id ? <Sidebar data={elem} key={elem._id}/> : null})}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
