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
            header["accessor"] = el;
            // header["Cell"] = row => (
            //     <div
            //         style={{
            //             backgroundColor:
            //                 row.value > 1 ? '#85cc00' : '#ffbf00',
            //             transition: 'all .2s ease-out'
            //         }}
            //     />);

            header["getProps"] = (state, rowInfo, column) => {
                return {
                    style: {
                        background: rowInfo && rowInfo.row.el > 1 ? '#85cc00' : '#ffbf00',
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
    console.log("headers: " + JSON.stringify(headers));
    console.log("initMatrix: " + JSON.stringify(rows));

    const updatedState = {
        matrixColumnHeaders: headers,
        matrixRowValues : rows

    }

    return updateObject(state, updatedState);
};

const updateMatrix = (state, action) => {

    const updatedState = {
        matrix: null
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