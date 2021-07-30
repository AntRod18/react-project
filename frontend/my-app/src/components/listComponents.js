import React, { Component } from "react";
import ComponentForm from "./componentsForm";
import { connect } from "react-redux";
import CompObj from "./compobj"

class ListComponent extends Component {
    
        


    render(){
        let list = this.props.lists.find( l=> l.id === parseInt(this.props.match.params.id))
        let components = list.components.map(c => <CompObj components={c} parts={this.props.parts} />)
        
        return(
            <div>
                <ComponentForm obj={list} />
                {components}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        parts: state.partsReducer.parts
    }
}


export default connect(mapStateToProps)(ListComponent)