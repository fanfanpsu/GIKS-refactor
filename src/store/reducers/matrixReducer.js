import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import {nodeMatrixheaderGeneration, nodeMatrixRowGeneration} from "../../shared/algorithm";

const initialState = {
    matrixID: "matrixID",
    matrix: null,
    matrixColumnHeaders: [],
    matrixRowValues: []
};

const initMatrix = (state, action) => {

    let headers = nodeMatrixheaderGeneration(action.nodes);
    let rows = nodeMatrixRowGeneration(action.nodes);

    const updatedState = {
        matrixColumnHeaders: headers,
        matrixRowValues : rows

    }

    return updateObject(state, updatedState);
};

const updateMatrix = (state, action) => {

    const array = state.matrixRowValues;
    const target = action.updatedEdges;

    const updateArray = (array, target) => {
        return array.map((a, i) => {
            const entries = Object.entries(a);
            for (const [name, object] of entries) {
                if (typeof object === 'object') {
                    if (target.find(e => e === object['edge'])) {
                        object['value'] = 1;
                        a[name] = object;
                    } else {
                        object['value'] = 0;
                        a[name] = object;
                    }
                }
            }
            return a;
        })
    }

    const updatedState = {
        matrixRowValues: updateArray(array, target)
    }

    if(updateArray == undefined || updateArray == null){
        return state;
    }

    return updateObject(state, updatedState);
};

const matrixReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_MATRIX:
            return updateMatrix(state, action);
        case actionTypes.INIT_MATRIX:
            return initMatrix(state, action);
        default:
            return state;
    }
};

export default matrixReducer;