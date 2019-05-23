import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import {nodeMatrixRowGeneration} from "../../shared/algorithm";

const initialState = {
    matrixID: "matrixID",
    matrix: null,
    matrixColumnHeaders: [],
    matrixRowValues: []
};

const initMatrix = (state, action) => {

    let headers = Object.values(action.nodes)
        .map(node => {
            return node.data.id;
        }).reduce((arr, el,index) => {

            let header = {};
            header["Header"] = el.charAt(0).toUpperCase() + el.slice(1);
            header["accessor"] = el.toString() + ".value";
            header["getProps"] = (state, rowInfo) => {
                console.log()
                return {
                    style: {
                        background: rowInfo && rowInfo.row
                            && rowInfo.row[el.toString() + ".value"] === 1 ? '#85cc00' : '#ffbf00',
                        transition: 'all .2s ease-out'
                    },
                };
            }

            return arr.concat(header);
        }, []);

    headers.splice(0, 0, {
        Header : "",
        accessor : "node"
    });

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