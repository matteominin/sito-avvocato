import React from 'react'
import axios from 'axios'
import '../../css/blog/home.css'
import '../../css/blog.css'

import Cards from '../cards/ArticleCard'

class home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
        this.errorHandler = this.errorHandler.bind(this)
    }

    componentDidMount(){
        axios.get('https://avvocatoo.herokuapp.com/articles')
            .then(res => this.setState({articles: res.data}))
            .catch(err => {
                console.log('Error: ' + err)
                this.errorHandler();
            })
    }

    errorHandler(){
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                if(this.state.articles.length <= 0){
                    axios.get('https://avvocatoo.herokuapp.com/articles')
                        .then(res => {this.setState({articles: res.data})})
                }
            },1000)   
        }
    }

    render(){

        function convertiData(data){
            const mesi = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
            let arr = data.substring(0,10).split('-').reverse()
            arr[1] = mesi[Number(arr[1] - 1)]
            return arr.join(' ')
        }

         return (
            <div className="blog home">
                {this.state.articles.map(elem => {return <Cards key={elem._id} data={{
                    img: elem.img,
                    imgAlt: elem.imgAlt,
                    title: elem.title,
                    text: elem.text,
                    date: convertiData(elem.date),
                    _id: elem._id
                }}/>})}
            </div>
        )   
    }
}

export default home
