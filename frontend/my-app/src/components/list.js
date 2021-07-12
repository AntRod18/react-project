import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class List extends React.Component {

    render(){
        
        const { name, id } = this.props.list
        return (
            <div id="list-container">
                <Link to={`/lists/${id}`}>
                    { name }
                </Link>
                
                
            </div>
        )
    }
}
