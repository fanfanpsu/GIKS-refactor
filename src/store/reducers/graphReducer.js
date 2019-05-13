import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
    graphID: "cytoscape"

};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = ( state, action ) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedState );
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
    const updatedIngs = updateObject( state.ingredients, updatedIng );
    const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject( state, updatedSt );
};

const setIngredients = (state, action) => {
    return updateObject( state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    } );
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};


const updateMatrix = ( state, action ) => {
    //TODO Edit the methods
    const updatedNodePosition = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
    //TODO Edit the node position
    const updatedNodePositions = updateObject( state.ingredients, updatedNodePosition );
    const updatedState = {
        nodes: updatedNodePositions,
        // totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        // building: true
    }
    return updateObject( state, updatedState );
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