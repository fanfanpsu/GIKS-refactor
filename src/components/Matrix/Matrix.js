import React, {Component, Fragment} from 'react';
import {Table, Container, Row, Col, CardDeck} from 'reactstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import Header from "./Cell/Header";
import Cell from "./Cell/Cell";

import graph_config from "../Graph/graph_config";
import {connect} from "react-redux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-address";

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

    renderHeadingRow = (_cell, cellIndex) => {
        const {matrixColumnHeaders} = this.props;

        return (
            <Header
                key={`heading-${cellIndex}`}
                content={matrixColumnHeaders[cellIndex]}
                header={true}
            />
        )
    };

    renderRow = (_row, rowIndex) => {
        const {rows} = this.props;

        return (
            <tr key={`row-${rowIndex}`}>
                {rows[rowIndex].map((_cell, cellIndex) => {
                    return (
                        <Cell
                            key={`${rowIndex}-${cellIndex}`}
                            content={rows[rowIndex][cellIndex]}
                        />
                    )
                })}
            </tr>
        )
    };

    render() {
        const {matrixColumnHeaders} = this.props;
        // this.renderHeadingRow = this.renderHeadingRow.bind(this);
        // this.renderRow = this.renderRow.bind(this);
        // alert("renderHeadingRow with data 1: " +JSON.stringify());
        // alert("renderHeadingRow with data 2: " +JSON.stringify());
        //
        // const theadMarkup = (
        //     <tr key="heading">
        //         <Header
        //             key={-1}
        //             content={""}
        //             header={true}
        //         />
        //         {matrixColumnHeaders.map(this.renderHeadingRow)}
        //     </tr>
        // );

        //TODO: get the react-table config updated
        // alert("render: " + JSON.stringify(this.props.matrixRowValues));
        if(this.props.matrixColumnHeaders !== undefined
            && this.props.matrixRowValues !== undefined) {
            return <ReactTable
                columns={this.props.matrixColumnHeaders}
                data = {this.props.matrixRowValues}/>;
        }  else {
            return <Table></Table>;
        }

        // return (
        //     <Table>
        //         <thead>
        //             {theadMarkup}
        //         </thead>
        //
        //     </Table>
        // );
    }
}

const mapStateToProps = (state) => {
    return {
        nodes: state.graphReducer.cy.nodes(),
        // matrixColumnHeaders: state.matrixColumnHeaders
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);