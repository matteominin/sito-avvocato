import React, { Component } from 'react'
import axios from 'axios'

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state = {
            article: {}
        }
    }

    componentDidMount(){
        let id = window.location.pathname.replace('/blog/articoli/', '')

        axios.get('https://avvocatoo.herokuapp.com/articles/' + id)
            .then(res => this.setState({article: res.data}))
            .catch(err => console.log('Error: ' + err))
    }

    render() {
        return (
            <div className="articolo">

            </div >
        )
    }
}
