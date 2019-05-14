import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    graphID: "cytoscape"

};

const updateMatrix = ( state, action ) => {
    //TODO Edit the methods
    const updatedNodePosition = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    //TODO Edit the node position
    const updatedNodePositions = updateObject( state.ingredients, updatedNodePosition );
    const updatedState = {
        nodes: updatedNodePositions
    }
    return updateObject( state, updatedState );
};

const onGraphUpdated = ( state, action ) => {
    alert("onGraphUpdated 1");
    return updateObject( state, state );
};


const graphReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_MATRIX: return updateMatrix( state, action );
        // case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        // case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        // case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default graphReducer;