import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import BuildControls from '../../components/Graph/BuildControls/BuildControls';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Graph from "../../components/Graph/Graph";
import Burger from "../../components/Burger/Burger";
import {nodePairing} from "../../shared/algorithm";

class GraphBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...}
    }

    // this state is called initial state, or class property
    state = {}

    componentDidMount() {
        //TODO Figure out how to restfully get the graph data

    }
    componentDidUpdate() {
        this.props.cy.on('dragfree', 'node', (evt) => {
            this.props.cy.edges().style('opacity', 0);
            console.log(
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
                })
            );

            this.props.cy.elements('node:selected').unselect();
            this.props.onGraphUpdated();

            //this.setState(this.state); this will trigger the componentDidUpdate
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
        onGraphUpdated: () => dispatch(actions.graphUpdated())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(GraphBuilder, axios));