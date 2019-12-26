import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

import {raw_user_experiments} from '../../assets/rawdata/rawdata'
import raw_user_experiments_fewer from '../../assets/rawdata/rawdata_fewer'

export const fetchExperimentsStart = () => {
    return {
        type: actionTypes.FETCH_EXPERIMENTS_START
    };
};

// set exp panels after success retrieved exps
export const setManagementExperiments = (raw_user_experiments_result) => {
    return {
        type: actionTypes.SET_EXPERIMENTS,
        experiments: raw_user_experiments_result.experiments
    };
};

export const fetchManagementExperimentsFailed = () => {
    return {
        type: actionTypes.FETCH_EXPERIMENTS_FAIL
    };
};

export const loadUserExperiments = () => {
    return dispatch => {

        dispatch(fetchExperimentsStart());

        dispatch(setManagementExperiments(raw_user_experiments));
        // TODO move the fetchExperiments to management reducer
        // axios.get('https://giks-firebase.firebaseio.com/experiments.json')
        //     .then(response => {
        //         dispatch(setManagementExperiments(response.data));
        //     })
        //     .catch(error => {
        //         //TODO Rever this back so switch to use live data again
        //         // dispatch(fetchManagementExperimentsFailed());
        //         dispatch(setManagementExperiments(raw_user_experiments_fewer));
        //     });
    };
};