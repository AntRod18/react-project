import { Component } from "react";
import { connect } from "react-redux";
import { fetchLists } from '../actions/list'
import  List from './list'
import ListForm from "./listForm";

class ListsOfList extends Component {

    componentDidMount() {
        this.props.fetchLists()
    }

    render() {
        const lists = this.props.list.map(l => <List list={l} />)
        
        return (
            <div id="list-container">
                <ListForm />
                
                { lists }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list
    }
}

export default connect(mapStateToProps, { fetchLists })(ListsOfList)