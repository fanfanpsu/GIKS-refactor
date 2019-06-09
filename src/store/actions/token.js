// file: src/actions/index.js
import * as actionTypes from './actionTypes';

export const setToken = (data) => {
    return {
        type: actionTypes.SET_TOKEN,
        data
    }
}