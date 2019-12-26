import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

const localmock = true
let create_experiment_url = `/api/experiment/create/`;  //TODO Consider use restful rule instead of url

export const createExperimentStart = () => {
    return {
        type: actionTypes.CREATE_EXPERIMENTS_START
    };
};

export const createExperimentSuccess = () => {
    return {
        type: actionTypes.CREATE_EXPERIMENTS_SUCCESS
    };
};

export const createExperimentFail = (error) => {
    return {
        error: error,
        type: actionTypes.CREATE_EXPERIMENTS_FAIL
    };
};

export const createExperiment = (title, description, amountOfParticipant) => {
    return dispatch => {
        dispatch(createExperimentStart());
        const experimentCreationData = {
            title: title,
            description: description,
            amountOfParticipant: amountOfParticipant,
            user: this.auth.user   //TODO Find a way to globally set the axios.post's user
        };

        if (localmock) {
            dispatch(createExperimentSuccess("localmockup-token", "localmockup-id"));
        } else {
            axios.post(create_experiment_url, experimentCreationData)
                .then(response => {
                    dispatch(createExperimentSuccess(response.data.idToken, response.data.localId));
                })
                .catch(err => {
                    dispatch(createExperimentFail(err.response.data.error));
                });
        }
    };
};