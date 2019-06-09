import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    token : null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TOKEN:
            return action.data;
        default:
            return state;
    }
}

const updateToken = (state, action) => {
    //TODO: optimize this css style

    const updateToken = {
        token: action.token,
    }
    return updateObject(state, updateToken);
};

export default authReducer;