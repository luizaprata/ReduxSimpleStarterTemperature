import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }

    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({
            term: ''
        })
    }
    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input 
                    placeholder="type here" 
                    className="form-control" 
                    value={this.state.term} 
                    onChange={this.onInputChange.bind(this)}/>
                    
                <span className="input-group-btn">
                    <button className="btn btn-secondary">enviar</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)