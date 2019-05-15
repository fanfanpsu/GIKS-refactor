import * as actionTypes from './actionTypes';
import axios from '../../axios-address';
import {updateObject} from "../../shared/utility";

export const updateMatrix = (graph) => {
    //TODO Do we really need this graph parameter?
    alert("updateMatrix 1");

    // const updateMatrix = (state, action) => {
    //     //TODO Edit the methods
    //     const updatedNodePosition = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    //     //TODO Edit the node position
    //     const updatedNodePositions = updateObject(state.ingredients, updatedNodePosition);
    //     const updatedState = {
    //         nodes: updatedNodePositions
    //     }
    //     return updateObject(state, updatedState);
    // };
    //
    return {
        type: actionTypes.UPDATE_MATRIX,
        graph: graph
    };
};
