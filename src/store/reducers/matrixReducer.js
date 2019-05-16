import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    matrixID: "matrixID"

};

const updateMatrix = ( state, action ) => {
    // alert("updateMatrix 2");

    // const updatedNodePosition = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    // const updatedNodePositions = updateObject( state.ingredients, updatedNodePosition );

    const updatedState = {
        matrix: null
    }
    return updateObject( state, updatedState );
};

const matrixReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_MATRIX: return updateMatrix( state, action );

        default: return state;
    }
};

export default matrixReducer;