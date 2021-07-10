import { Component } from "react";
import { connect } from 'react-redux'
import  Part  from './part'
import { fetchParts } from '../actions/parts'

class PartsList extends Component {

    componentDidMount() {
        this.props.fetchParts()
    }

    render() {
        const parts = this.props.parts.map(p => <Part parts={p} />)
        return (
            <div id="parts-container">
                <h1>Parts currently available:</h1>
                {parts}
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