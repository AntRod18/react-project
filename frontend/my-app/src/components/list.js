import React from "react";
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    Route
  } from "react-router-dom";
  import ListComponent from "./listComponents";
  import { fetchParts } from "../actions/parts";

class List extends React.Component {



    render(){
        
        const { name, id } = this.props.list
        return (
            <div id="list-container">
                <Link  to={`/lists/${id}`}>
                    { name }
                </Link>
                
                
            </div>
        )
    }
}

export default List