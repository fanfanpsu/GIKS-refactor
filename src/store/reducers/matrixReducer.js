import React from 'react';
import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
    matrixID: "matrixID",
    matrix: null,
    matrixColumnHeaders: [],
    matrixCellValues: {}
};

const initMatrix = (state, action) => {

    // let matrixColumnHeaders = Object.keys(this.props.cy.json().elements.nodes)
    //     this.props.cy.json().elements.nodes.map()
    // alert(state.graphReducer.nodes);

    console.log("action.nodes: " + JSON.stringify(action.nodes));
    //action.nodes: [{"data":{"id":"n1"}},{"data":{"id":"n2"}},{"data":{"id":"n3"}},{"data":{"id":"n4"}},{"data":{"id":"n5"}},{"data":{"id":"n6"}},{"data":{"id":"n7"}},{"data":{"id":"n8"}},{"data":{"id":"n9"}},{"data":{"id":"n10"}}]

    let headers = Object.values(action.nodes)
        .map(node => {
            return node.data.id;
        }).reduce((arr, el) => {

            let header = {};
            header["Header"] = el.charAt(0).toUpperCase() + el.slice(1);;
            header["accessor"] = el;
            header["Cell"] = row => (
                <span
                    style={{

                        backgroundColor:
                            row.value > 1 ? '#85cc00' : '#ffbf00',

                        transition: 'all .2s ease-out'
                    }}
                />);

            // header["getProps"] = (state, rowInfo, column) => {
            //     return {
            //         style: {
            //             background: rowInfo && rowInfo.row.el > 1 ? 'red' : 'green',
            //         },
            //     };
            // }

            return arr.concat(header)
        }, []);

    // const columns = [{
    //     Header: 'Name',
    //     accessor: 'name' // String-based value accessors!
    // }, {
    //     Header: 'Age',
    //     accessor: 'age',
    //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    // }, {
    //     id: 'friendName', // Required because our accessor is not a string
    //     Header: 'Friend Name',
    //     accessor: d => d.friend.name // Custom value accessors!
    // }, {
    //     Header: props => <span>Friend Age</span>, // Custom header components!
    //     accessor: 'friend.age'
    // }]


    const updatedState = {
        matrixColumnHeaders: headers
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