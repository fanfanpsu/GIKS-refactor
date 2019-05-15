import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import cytoscape from 'cytoscape';
import {connect} from "react-redux";

import {updateObject} from '../../shared/utility';
import graph_config from './graph_config';
import classes from './Graph.css';
import * as actions from "../../store/actions";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

// import { observer } from "mobx-react";
// import cycola from 'cytoscape-cola';
// cytoscape.use(cycola);

// @observer
class Graph extends React.Component {
    cyStyle = {
        height: 'calc(100vh - 150px)',
        border: '1px solid #ddd'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.initGraph(this.props.graphID, graph_config);

        // this.cy = cytoscape(updateObject(graph_config,
        //     {container: document.getElementById(this.props.graphID)}));
        //
        // this.cy.on('dragfree', 'node', (evt) => {
        //     this.props.onGraphUpdated();
        //     //console.log(this.cy.json( ).elements.nodes);
        //     // console.log(this.cy.elements().jsons());
        //     // console.log(this.cy.nodes()[0].position());
        //     console.log(this.cy.elements().kruskal().jsons());
        //     this.cy.elements('node:selected').unselect();
        //     //this.setState(this.state); this will trigger the componentDidUpdate
        // });
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
    }

    render() {
        return (
            <div id={this.props.graphID} style={this.cyStyle}></div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        graphID: state.graphReducer.graphID,
        // cy: state.graphReducer.cy
        // mapStateToProps 通常用来map 属性，而非函数
        // onGraphUpdated: state.graphReducer.onGraphUpdated
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // onGraphUpdated:  (graph_data) => dispatch(actions.updateGraph()),
        initGraph : (graphID, graph_config) => dispatch(actions.initGraph(graphID, graph_config)),

    }
}

Graph.propTypes = {
    graphID: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
