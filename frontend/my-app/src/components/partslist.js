import { Component } from "react";
import { connect } from 'react-redux'
import  Part  from './part'
import { fetchParts } from '../actions/parts'
import { Row } from 'react-bootstrap'

class PartsList extends Component {

    componentDidMount() {
        this.props.fetchParts()
    }

    render() {
        const parts = this.props.parts.map(p => <Part parts={p} />)
        return (
            <div>
                <h1>Parts currently available:</h1>
                <Row lg="3" id="parts-container">
                    {parts}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        parts: state.partsReducer.parts
    }
}

export default connect(mapStateToProps, { fetchParts })(PartsList)