import * as actionTypes from './actionTypes';
import axios from '../../axios-address';
import {updateObject} from "../../shared/utility";

export const updateMatrix = (updatedEdges) => {
    return {
        type: actionTypes.UPDATE_MATRIX,
        updatedEdges:updatedEdges
    };
};



export const initMatrix = (nodes) => {
    return {
        type: actionTypes.INIT_MATRIX,
        nodes: nodes
    };
};