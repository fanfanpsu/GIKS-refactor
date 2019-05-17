import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    header: [],
    content :{},
    rowHeader:[]
};




const cellReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_CELL: return null;
        default: return state;
    }
};

export default cellReducer;