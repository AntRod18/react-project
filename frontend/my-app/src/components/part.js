import React, {Component} from 'react'
import { Card, Col } from 'react-bootstrap'


class Part extends Component {

    render() {
        const { name, kind, price } = this.props.parts
        return (
            <div>
                <Col> 
                    <Card>
                        <Card.Header>{kind}</Card.Header>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                {price}
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </div>
        )
    }
}



export default Part