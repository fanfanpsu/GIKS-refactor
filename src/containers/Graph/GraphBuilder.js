import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import BuildControls from '../../components/Graph/BuildControls/BuildControls';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Graph from "../../components/Graph/Graph";
import Burger from "../../components/Burger/Burger";

class GraphBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...}
    }

    // this state is called initial state, or class property
    state = {}

    componentDidMount() {
        //TODO Figure out how to restfully get the graph data

        // axios.get(data_source_node.getAttribute('href'))
        //     .then(function (response) {
        //
        //         const store = response.data; //new GraphModel(response.data);
        //
        //         const filter_node = document.getElementById('graph-nodes');
        //
        //         // ReactDOM.render(
        //         //     <Filter store={store}></Filter>,
        //         //     filter_node
        //         // );
        //
        //         ReactDOM.render(
        //             <Graph store={store}></Graph>,
        //             mount_node
        //         );
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         ReactDOM.render(
        //             <div className="alert alert-danger">
        //                 <strong>:(</strong>
        //                 <br/>
        //                 <span>No data</span>
        //             </div>,
        //             mount_node
        //         );
        //     });


    }
    componentDidUpdate() {
        this.props.cy.on('dragfree', 'node', (evt) => {
            //console.log(this.cy.json( ).elements.nodes);
            console.log(this.props.cy.elements().jsons());
            // console.log(this.cy.nodes()[0].position());
            // console.log(this.cy.elements().kruskal().jsons());
            //alert("trigger dragfree event binding in graphbuilder");
            // cytoscape_graph.elements('node:selected').unselect();
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