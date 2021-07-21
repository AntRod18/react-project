import React, { Component } from "react";
import PartsList from "./partslist"
import ComponentForm from "./componentsForm";
import { connect } from "react-redux";

class ListComponent extends Component {
    
        


    render(){
        let list = this.props.lists.find( l=> l.id === parseInt(this.props.match.params.id))
        let components = list.components.map(c => c.kind)
        
        console.log(list)
        return(
            <div>
                <ComponentForm obj={list} />
                {components}
            </div>
        )
    }
}



export default ListComponent