import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    matrixID: "matrixID",
    matrix:null,
    matrixColumnHeaders:[],
    matrixCellValues:{}
};

const initMatrix = ( state, action ) => {

    const updatedState = {
        matrix: null
    }
    return updateObject( state, updatedState );
};

const updateMatrix = ( state, action ) => {

    const updatedState = {
        matrix: null
    }
    return updateObject( state, updatedState );
};



const matrixReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_MATRIX: return updateMatrix( state, action );
        case actionTypes.INIT_MATRIX: return initMatrix( state, action );
        default: return state;
    }
};

export default matrixReducer;