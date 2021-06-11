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
         return (
            <div className="blog home">
                {this.state.articles.map(elem => {return <Cards data={elem} key={elem._id}/>})}
            </div>
        )   
    }
}

export default home
