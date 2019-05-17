import React, {Component, Fragment} from 'react';
import {Table, Container, Row, Col, CardDeck} from 'reactstrap';

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
        const {headings} = this.props;

        return (
            <Cell
                key={`heading-${cellIndex}`}
                content={headings[cellIndex]}
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
        console.log(this.props.nodes);

        const {headings, rows} = this.props;

        this.renderHeadingRow = this.renderHeadingRow.bind(this);
        this.renderRow = this.renderRow.bind(this);

        const theadMarkup = (
            <tr key="heading">
                {headings.map(this.renderHeadingRow)}
            </tr>
        );

        const tbodyMarkup = rows.map(this.renderRow);

        return (
            <table className="Table">
                <thead>{theadMarkup}</thead>
                <tbody>{tbodyMarkup}</tbody>
            </table>
        );

        // const expCardList = Object.keys(this.props.experiments)
        //     .map(cardKey => {
        //         return (
        //             <Col xs="6" sm="3" md={"3"} key={this.props.experiments[cardKey]._id}>
        //                 <Expcard
        //                     title={this.props.experiments[cardKey].title}
        //                     subtitle={this.props.experiments[cardKey].subtitle}
        //                     cardcontent={this.props.experiments[cardKey].cardcontent}
        //                 />
        //             </Col>);
        //     });
        //
        // return (
        //     <Fragment>
        //         <CardDeck>
        //             <Col xs="6" sm="3" md={"3"}>
        //                 <Expcard title="New Experiment" key={-1}/>
        //             </Col>
        //             {expCardList}
        //         </CardDeck>
        //     </Fragment>
        // );
    }
}
const mapStateToProps = (state) => {
    return {
        matrixCellValues: state.matrixReducer.matrixCellValues,
        nodes: state.graphReducer.cy.nodes(),
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Matrix);