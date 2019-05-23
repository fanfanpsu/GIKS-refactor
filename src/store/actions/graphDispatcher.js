import * as actionTypes from './actionTypes';
import axios from '../../axios-address';
import {updateMatrix} from "./matrixDispatcher";


export const graphUpdated = (updatedEdges) => {
    return dispatch => {
        dispatch(updateMatrix(updatedEdges));
    };
};

export const initGraph = (graphID, graph_config) => {
    return {
        type: actionTypes.INIT_CY,
        graphID: graphID,
        graph_config: graph_config
    };
};