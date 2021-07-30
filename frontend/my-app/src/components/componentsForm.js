import { Component } from "react";
import { connect } from "react-redux";
import { fetchParts } from "../actions/parts";
import { createComponents} from "../actions/list"

class ComponentForm extends Component {

    state = {
        kind:"",
        list_id: `${this.props.obj.id}`,
        part_id:""
    }

    componentDidMount() {
        this.props.fetchParts()
    }

    handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createComponents(this.state)
        // window.location.reload()
        this.setState({
            kind: "",
            list_id:`${this.props.obj.id}` ,
            part_id: ""
        })
    }

    

    render(){
        return(
            <div id="component-form">
                <form onSubmit={this.handleSubmit}>
                   <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option value="processor">Processor</option>
                        <option value="cooler">CPU Cooler</option>
                        <option value="motherboard">Motherboard</option>
                        <option value="memory">Memory</option>
                        <option value="storage">Storage</option>
                        <option value="graphics">Graphics Card</option>
                        <option value="power">Power Supply</option>
                        <option value="case">Case</option>
                   </select> 
                   <br></br>
                   <select name="part_id" value={this.state.part_id} onChange={this.handleChange}>
                    {this.props.parts.map((part) => (
                        <option value={part.id}>{part.name}</option>
                    ))}
                    </select>
                    <br></br>
                    
                    <input type="submit" value="Add A Component" />
                
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        parts: state.partsReducer.parts,
        list: state.listReducer.list
    }
}
export default connect(mapStateToProps, { fetchParts, createComponents })(ComponentForm)