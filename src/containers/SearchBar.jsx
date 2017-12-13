import React, {Component} from 'react'

class SearchBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    render(){
        return (
            <form className="input-group">
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

export default SearchBar