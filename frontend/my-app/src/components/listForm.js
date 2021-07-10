import { Component } from "react"
import  { createList }  from '../actions/list'
import { connect } from 'react-redux'

class ListForm extends Component {

    state={
        name:""
    }
    
    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createList(this.state)
        this.setState({
            name: ""
        })
    }

    render(){
        return(
            <div id="list-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" value="Add A List" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { createList })(ListForm)