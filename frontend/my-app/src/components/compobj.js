import { Component } from "react";
import { Card, Col } from 'react-bootstrap';


class CompObj extends Component {


 
    
    render(){
        const {part_id} = this.props.components
        const part = this.props.parts.find(p => p.id === part_id)
        // console.log(part)
        return(

            <Col> 
                <Card>
                    <Card.Header>{part.kind}</Card.Header>
                        <Card.Body>
                            <Card.Title>{part.name}</Card.Title>
                            <Card.Text>
                            {part.price}
                            </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

        )
    }
}

export default CompObj
