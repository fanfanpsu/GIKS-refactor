import * as actionTypes from './actionTypes';
import axios from '../../axios-address';


// set exp panels after success retrieved exps
export const setManagementExperiments = (experiments) => {
    return {
        type: actionTypes.SET_EXPERIMENTS,
        experiments: experiments
    };
};

export const onLoadExperiment = () => {
    return {
        type: actionTypes.LOAD_EXPERIMENTS,
    };
};

export const fetchManagementExperimentsFailed = () => {
    return {
        type: actionTypes.FETCH_EXPERIMENTS_FAIL
    };
};

export const initExperimentCreationPanel = () => {
    return dispatch => {
        axios.get('https://giks-firebase.firebaseio.com/experiments.json')
            .then(response => {
                dispatch(setManagementExperiments(response.data));
            })
            .catch(error => {
                dispatch(fetchManagementExperimentsFailed());
            });
    };
};