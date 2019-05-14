import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

export const dragNodeEnd = ( nodeId ) => {
    return {
        type: actionTypes.DRAG_NODE_END,
        nodeID: nodeId
    };
};

//TODO
export const setDragNodeEnd = () => {
    return dispatch=>{dragNodeEnd("")};
};

//TODO
export const initGraph = () => {
    return dispatch=>{dragNodeEnd("")};
};
//TODO
export const updateGraph = () => {
    return dispatch=>{dragNodeEnd("")};
};