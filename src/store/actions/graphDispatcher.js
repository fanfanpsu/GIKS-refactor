import * as actionTypes from './actionTypes';
import axios from '../../axios-address';
import {updateMatrix} from "./matrixDispatcher";


export const graphUpdated = (nodeId) => {
    return dispatch => {
        dispatch(updateMatrix());
    };

};

export const initGraph = (graphID, graph_config) => {
    return {
        type: actionTypes.INIT_CY,
        graphID: graphID,
        graph_config: graph_config
    };
};

export const updateGraph = () => {
    return dispatch => {
        graphUpdated("")
    };
};