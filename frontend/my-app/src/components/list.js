import React from "react";
import {
    Link
  } from "react-router-dom";

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