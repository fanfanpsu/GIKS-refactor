import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

// import { observer } from "mobx-react";

// import cycola from 'cytoscape-cola';
import cytoscape from 'cytoscape';


import classes from './Graph.css';
import {connect} from "react-redux";

// cytoscape.use(cycola);

// @observer
class Graph extends React.Component {
    cy = null;
    cyNode = 'cytoscape';
    cyStyle = {
        height: 'calc(100vh - 100px)',
        border: '1px solid #ddd'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const { graph } = this.props.store;
        alert(this.props.graphID);

        let cy_config = {
            container: document.getElementById(this.cyNode),
            layout: {
                name: 'grid',
                directed: true,
                padding: 10
            },
            elements: {
                "nodes": [
                    { "data": { "id": "n1" } },
                    { "data": { "id": "n2" } },
                    { "data": { "id": "n3" } },
                    { "data": { "id": "n4" } },
                    { "data": { "id": "n5" } },
                    { "data": { "id": "n6" } },
                    { "data": { "id": "n7" } },
                    { "data": { "id": "n8" } },
                    { "data": { "id": "n9" } },
                    { "data": { "id": "n10" } }
                ],
                "edges": []
            },
            style: [
                {
                    selector: 'node',
                    style: {
                        'content': 'data(id)'
                    }
                }
            ],
        };

        // self = this;
        this.cy = cytoscape(cy_config);
        this.cy.on('dragfree', 'node', (evt) => {
            alert('DragFree event triggered');
        });
    }

    updateFilter(filter) {
        this.props.store.setFilter(filter);
    }

    componentDidUpdate() {
        const { filter, hiddenElements } = this.props.store;

        // TODO This might be useful
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
        alert(this.props.graphID);
        return (
            <div id={this.cyNode} style={this.cyStyle}></div>
        );
    }
}



const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients
        graphID : state.graphReducer.graphID
    }
};

export default connect( mapStateToProps )( Graph );

// export default Graph;