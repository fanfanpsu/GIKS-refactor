import React, {Component, Fragment} from 'react';
import {Table, Container, Row, Col, CardDeck} from 'reactstrap';
import { useReactTable } from 'react-table'

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
        this.renderHeadingRow = this.renderHeadingRow.bind(this);
        // this.renderRow = this.renderRow.bind(this);
        // alert("renderHeadingRow with data 1: " +JSON.stringify());
        // alert("renderHeadingRow with data 2: " +JSON.stringify());
        //
        const theadMarkup = (
            <tr key="heading">
                <Header
                    key={-1}
                    content={""}
                    header={true}
                />
                {matrixColumnHeaders.map(this.renderHeadingRow)}
            </tr>
        );

        // const tbodyMarkup = rows.map(this.renderRow);

        return (
            <Table>
                <thead>
                    {theadMarkup}
                </thead>
                {/*<tbody>{tbodyMarkup}</tbody>*/}
            </Table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        matrixCellValues: state.matrixReducer.matrixCellValues,
        nodes: state.graphReducer.cy.nodes(),
        // matrixColumnHeaders: state.matrixColumnHeaders
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);