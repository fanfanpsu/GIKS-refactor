import * as actionTypes from './actionTypes';
import axios from '../../axios-address';
import {updateMatrix} from "./matrixBuilder";


export const graphUpdated = (nodeId) => {
    //alert("graphUpdated");
    return dispatch => {
        dispatch(updateMatrix(""));
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