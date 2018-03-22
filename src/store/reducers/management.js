import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    expCards: [{title: "t1", subtitle: "st1", cardcontent: "cc1"}],
    loading: true,
    didInvalidate: true,
    lastUpdated: 'xxxxxxx'
};

//remove
const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const fetchExperimentsInit = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const purchaseBurgerStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const purchaseBurgerSuccess = ( state, action ) => {
    const newOrder = updateObject( action.orderData, { id: action.orderId } );
    return updateObject( state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat( newOrder )
    } );
};

const purchaseBurgerFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        expCards: action.expCards,
        loading: false
    } );
};

const fetchExperimentsSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false
    } );
};

//remove
const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchExperimentsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.FETCH_EXPERIMENTS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_EXPERIMENTS_SUCCESS: return fetchExperimentsSuccess( state, action );
        case actionTypes.FETCH_EXPERIMENTS_FAIL: return fetchExperimentsFail( state, action );
        case actionTypes.SET_EXPERIMENTS: return fetchOrdersFail( state, action );

        default: return state;
    }
};

export default reducer;