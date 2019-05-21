import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    content :{},
    rowHeader:[],
    cellKey : {}
};

const cellReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_CELL:
            return state;
        default:
            return state;
    }
};

export default cellReducer;