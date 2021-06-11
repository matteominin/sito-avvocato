import React from 'react'
import axios from 'axios'

class AdminPage extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: "",
            text: "",
            date: undefined
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.title = this.title.bind(this)
        this.date = this.date.bind(this)
    }


    submitHandler(e){
        e.preventDefault()
        axios.post('https://avvocatoo.herokuapp.com/corsi/add', this.state)
            .then(res => {
                console.log(res.data)
                window.location = '/admin'
            })
            .catch(err => {
                console.log('Error: ' + err)
                window.location = '/error'
            })
    }

    title(e) {
        this.setState({
            title: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase()
        })
    }

    date(e){
        this.setState({
            date: Date.parse(e.target.value)
        })
    }

    render(){
        return (
            <div className="admin">
                <h1>Aggiungi un nuovo corso di formazione:</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Nome corso</label>
                    <input type="text" onChange={this.title} required/>
                    <br />
                    <br />
                    <label>Data</label>
                    <input type="date" onChange={this.date} required/>
                    <br />
                    <button type="submit">Carica corso</button>
                </form>
            </div>
        )
    }
}

export default AdminPage
