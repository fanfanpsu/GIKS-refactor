import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import BuildControls from '../../components/Graph/BuildControls/BuildControls';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Graph from "../../components/Graph/Graph";

class GraphBuilder extends Component {
    constructor(props) {
        super(props);
    }

    state = {}

    componentDidMount() {
    }

    componentDidUpdate() {
        this.props.cy.on('dragfree', 'node', (evt) => {
            this.props.cy.edges().style('opacity', 0);

            this.props.cy.elements('node:selected').unselect();

            this.props.graphUpdated(
                this.props.cy.elements().kruskal((edge)=>{
                    let xs = this.props.cy.getElementById(edge.data().source).position('x')
                        - this.props.cy.getElementById(edge.data().target).position('x');

                    let ys = this.props.cy.getElementById(edge.data().source).position('y')
                        - this.props.cy.getElementById(edge.data().target).position('y');

                    return Math.sqrt( xs*xs + ys*ys );
                }).jsons()
                    .filter((element)=>{
                        return (element.group == "edges");
                    }).map((element)=>{
                    this.props.cy.edges('[id = "'+ element.data.id +'"]').style('opacity', 1);
                    return element.data.id;
                }), true
            );
        });
     }
    render() {
        return (
            <Fragment>
                {/*TODO OPTIMIZE this code? and move the event binding to the graphBuildControl*/}
                {/*TODO Add the graphId at the graph builder instead of from reducer, because we need to */}
                {/*handle multiple graph*/}
                <Graph graphData = {{}}> </Graph>
                {/*TODO Refactor to graphBuildControl*/}
                {/*<BuildControls></BuildControls>*/}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cy: state.graphReducer.cy,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        graphUpdated: (updatedEdges, updateMatrix) => dispatch(actions.graphUpdated(updatedEdges,updateMatrix)),
        initMatrix : (nodes) => dispatch(actions.initMatrix(nodes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(GraphBuilder, axios));