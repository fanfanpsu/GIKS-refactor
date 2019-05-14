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

    render() {
        return (
            <Fragment>
                <Graph graphData = {{}}> </Graph>
            </Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        onGraphUpdated: state.graphReducer.onGraphUpdated,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onGraphUpdated: () => dispatch(actions.purchaseInit())
        // onGraphUpdated: () => alert("about to dispactch the graphupdate")//dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(GraphBuilder, axios));