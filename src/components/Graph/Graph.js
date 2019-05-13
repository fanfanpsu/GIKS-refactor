import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import cytoscape from 'cytoscape';
import {connect} from "react-redux";

import {updateObject} from '../../shared/utility';
import graph_config from './graph_config';
import classes from './Graph.css';
import * as actions from "../../store/actions";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

// import { observer } from "mobx-react";
// import cycola from 'cytoscape-cola';
// cytoscape.use(cycola);

// @observer
class Graph extends React.Component {
    cy = null;

    cyStyle = {
        height: 'calc(100vh - 150px)',
        border: '1px solid #ddd'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.cy = cytoscape(updateObject(graph_config,
            {container: document.getElementById(this.props.graphID)}));

        this.cy.on('dragfree', 'node', (evt) => {
            this.props.onGraphUpdated();
        });
    }

    updateFilter(filter) {
        this.props.store.setFilter(filter);
    }

    componentDidUpdate() {
        // const {filter, hiddenElements} = this.props.store;

        // TODO This might be useful?
        this.cy.elements('node:selected').unselect();
        //TODO Update the state data for matrix data

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
    }

    render() {
        // const { filter } = this.props.store;
        console.log(this.props.graphID);
        return (
            <div id={this.props.graphID} style={this.cyStyle}></div>
        );
    }
}

const mapStateToProps = state => {
    return {
        graphID: state.graphReducer.graphID,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
        onGraphUpdated:  () => alert("about to dispactch the graphupdate")//dispatch(actions.purchaseInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Graph, axios));
