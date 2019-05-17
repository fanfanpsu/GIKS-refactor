import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import cytoscape from 'cytoscape';
import graph_config from '../../components/Graph/Graph.js';
import {nodePairing} from "../../shared/algorithm"
import initMatrix from "../../store/reducers/matrixReducer"
import {purchaseBurgerSuccess} from "../actions/order";
const initialState = {
    graphID: "cytoscape",
    cy: cytoscape({ /* options */ })
};

const init_cy = (state, action) => {

    let cytoscape_graph = cytoscape(updateObject(action.graph_config,
        {
            container: document.getElementById(action.graphID)
        }));

    cytoscape_graph.add(nodePairing(cytoscape_graph.json().elements.nodes));

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
            return init_cy(state, action).then(()=>{
                //TODO not sure if this works
                alert("rendering matrix");
                dispatch => {
                    dispatch(
                    {type:actionTypes.INIT_MATRIX}
                    )};
                });

        default:
            return state;
    }
};

export default graphReducer;