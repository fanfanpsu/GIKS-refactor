import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const dragNodeEnd = ( nodeId ) => {
    return {
        type: actionTypes.DRAG_NODE_END,
        nodeID: nodeId
    };
};

export const setDragNodeEnd = () => {
    return dispatch=>{dragNodeEnd("")};
};