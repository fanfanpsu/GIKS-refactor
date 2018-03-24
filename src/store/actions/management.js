import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import raw_experiments from '../rawdata/rawdata'

// set exp panels after success retrieved exps
export const setManagementExperiments = ( experiments ) => {
    return {
        type: actionTypes.SET_EXPERIMENTS,
        experiments: raw_experiments
    };
};


export const fetchManagementExperimentsFailed = () => {
    return {
        type: actionTypes.FETCH_EXPERIMENTS_FAIL
    };
};

export const initManagementExpPanels = () => {
    return dispatch => {
        axios.get( 'https://giks-firebase.firebaseio.com/experments.json' )
            .then( response => {
                dispatch(setManagementExperiments(response.data));
            } )
            .catch( error => {
                dispatch(fetchManagementExperimentsFailed());
            } );
    };
};