import React from 'react'
import FormazioneCard from './cards/FormazioneCard'
import axios from 'axios'
import '../css/formazione.css'

class Formazione extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count: null,
            Ncorsi: null,
            corsi: []
        }
        this.loadMore = this.loadMore.bind(this)
        this.convertiData = this.convertiData.bind(this)
    }

    componentDidMount(){
        axios.get('https://pure-ravine-53645.herokuapp.com/corsi/')    //https://pure-ravine-53645.herokuapp.com/corsi/1
        .then(res => this.setState({
            corsi: res.data[0],
            Ncorsi: 1,
            count: res.data[1]
        }))
        .catch(err => console.log('Error: ' + err))
    }

    loadMore(){
        this.setState(prev =>  {return {Ncorsi: prev.Ncorsi + 1}})
    }

    convertiData(data){
            const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
            let arr = data.substring(0,10).split('-').reverse()
            arr[1] = mesi[Number(arr[1] - 1)]
            return arr.join(' ')
    }

    render(){
        return (
            <div className="fromazione">
                <h2 style={{marginBottom: "50px"}}>I MIEI CORSI DI FORMAZIONE</h2>
                <table className="formazione__table">
                    <thead>
                        <tr className="formazione__table__title">
                            <td>Data</td>
                            <td>Corso</td>
                            <td>Descrizione</td>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.corsi.length > 0 ? this.state.corsi.slice(0, this.state.Ncorsi).map(elem => <FormazioneCard key={elem._id} data={{
                        title: elem.title,
                        text: elem.text,
                        date: this.convertiData(elem.date)
                        }}/>) : <tr><td>Errore</td></tr>}
                    </tbody>

                </table>
                <table className="formazione__tableMobile">

                        <tbody>
                            {this.state.corsi.length > 0 ? this.state.corsi.slice(0, this.state.Ncorsi).map(elem => <FormazioneCard key={elem._id} data={{
                                title: elem.title,
                                text: elem.text,
                                date: this.convertiData(elem.date)
                                }}/>) : <tr><td>Errore</td></tr>}
                        </tbody>
                </table>
                {this.state.count > this.state.Ncorsi ? <button onClick={() => this.loadMore()}>Carica altro...</button> : null}
            </div>
        )
    }
}

export default Formazione
