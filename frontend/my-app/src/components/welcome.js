import React from "react";
import { Jumbotron } from "react-bootstrap";

export default class Welcome extends React.Component {
    render(){
        return (
            <div id="welcome-message">
                <Jumbotron >
                    <h1> Welcome to PC Build Clone</h1>
                    <p> On this website you can create your dream pc builds and see what the total will be when your done with your build.</p>
                </Jumbotron>
            </div>
        )
    }
}