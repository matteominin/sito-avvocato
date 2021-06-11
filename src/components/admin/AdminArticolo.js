import React, { Component } from 'react'
import axios from 'axios'

export default class AdminArticolo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            text: "",
            img: "",
            imgAlt: "immagine articolo",
            date: new Date()
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e){
        e.preventDefault()
        axios.post('https://avvocatoo.herokuapp.com/articles/add', this.state)
            .then(res => {
                console.log(res.data)
                window.location = '/'
            })
            .catch(err => console.log('Error: ' + err))
    }

    

    render() {
        return (
            <div>
                <h1>Scrivi un nuovo articolo: </h1>
                <form onSubmit={this.submit}>
                    <label>Titolo</label>
                    <input type="text" name="title" onChange={this.handleChange} required/>
                    <br /><br />
                    <label>Testo</label>
                    <input type="text" name="text" onChange={this.handleChange} required/>
                    <br /><br />
                    <label>Link immagine</label>
                    <input type="text" name="img" onChange={this.handleChange} required/>
                    <br /><br />
                    <label>Descrizione immagine (facoltativa)</label>
                    <input type="text" name="imgAlt" onChange={this.handleChange}/>
                    <br />
                    <button type="submit">Pubblica articolo</button>
                </form>
            </div>
        )
    }
}
