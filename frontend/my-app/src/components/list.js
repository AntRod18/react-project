import React from "react";

export default class List extends React.Component {

    render(){
        const { name } = this.props.list
        return (
            <div id="list-container">
                <h3>{ name }</h3>
            </div>
        )
    }
}
