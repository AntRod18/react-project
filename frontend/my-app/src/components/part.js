import React, {Component} from 'react'
import { Card, Row, Col } from 'react-bootstrap'


class Part extends Component {

    render() {
        const { name, kind, price } = this.props.parts
        return (
            <Row lg="3">
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
            </Row>
        )
    }
}



export default Part