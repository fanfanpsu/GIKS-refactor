import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

import {raw_experiments} from '../../assets/rawdata/rawdata'
import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer'

// set exp panels after success retrieved exps
export const setManagementExperiments = (experiments) => {
    return {
        type: actionTypes.SET_EXPERIMENTS,
        experiments: experiments
    };
};

export const fetchManagementExperimentsFailed = () => {
    return {
        type: actionTypes.FETCH_EXPERIMENTS_FAIL
    };
};

export const initManagementExpPanels = () => {
    return dispatch => {
        dispatch(setManagementExperiments(raw_experiments_fewer));
        // axios.get('https://giks-firebase.firebaseio.com/experiments.json')
        //     .then(response => {
        //         dispatch(setManagementExperiments(response.data));
        //     })
        //     .catch(error => {
        //         //TODO Rever this back so switch to use live data again
        //         // dispatch(fetchManagementExperimentsFailed());
        //         dispatch(setManagementExperiments(raw_experiments));
        //     });
    };
};