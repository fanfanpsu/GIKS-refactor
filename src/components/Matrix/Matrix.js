import React, {Component} from 'react';
import {Table} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import {connect} from "react-redux";

// this class used to build up the table to visualize the table of distance
class Matrix extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    componentDidUpdate() {
        // const {filter, hiddenElements} = this.props.store;
        // if(filter) {
        //     if(hiddenElements) {
        //         hiddenElements.restore();
        //         this.props.store.clearHiddenElements();
        //     }
        //
        //     let node = this.cy.getElementById(filter);
        //     let neighbours = node.neighborhood();
        //     // Hide farest elements
        //     this.props.store.setHiddenElements(self.cy.elements().difference(neighbours).not(node));
        //     this.cy.nodes().difference(neighbours).not(node).remove();
        //     node.select();
        // }
        // else if(hiddenElements) {
        //     hiddenElements.restore();
        //     this.props.store.clearHiddenElements();
        // }
        //
        // this.cy.fit();
    };

    render() {
        //TODO: get the react-table config updated
        if(this.props.matrixColumnHeaders !== undefined
            && this.props.matrixRowValues !== undefined) {
            return <ReactTable
                columns={this.props.matrixColumnHeaders}
                data = {this.props.matrixRowValues}
                showPagination = {false}
                minRows = {0} />;
        }  else {
            return <Table></Table>;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        nodes: state.graphReducer.cy.nodes()
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);