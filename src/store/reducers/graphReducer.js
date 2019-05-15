import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import cytoscape from 'cytoscape';
import graph_config from '../../components/Graph/Graph.js';

const initialState = {
    graphID: "cytoscape",
    cy: null
};

const init_cy = (state, action) => {

    let cytoscape_graph = cytoscape(updateObject(action.graph_config,
        {container: document.getElementById(action.graphID)}));

    const updatedCy = {
        cy: cytoscape_graph
    }

    return updateObject(state, updatedCy);
};

const onGraphUpdated = (state, action) => {
    alert("onGraphUpdated 1");

    return updateObject(state, state);
};

const graphReducer = (state = initialState, action) => {
    switch (action.type) {
        // case actionTypes.UPDATE_MATRIX:
        //     return updateMatrix(state, action);
        case actionTypes.INIT_CY:
            return init_cy(state, action);
        default:
            return state;
    }
};

export default graphReducer;