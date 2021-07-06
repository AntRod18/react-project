import { Component } from "react";
import { connect } from 'react-redux'
import  Part  from './part'
import { fetchParts } from '../actions/parts'

class PartsList extends Component {



    render() {
        const parts = this.props.parts.map(p => <Part parts={p} />)
        return (
            <div>
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