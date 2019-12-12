import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import raw_experiments from '../../assets/rawdata/rawdata'
import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer'


const initialState = {
    experiments: raw_experiments_fewer,
    loading: true,
    didInvalidate: true,
    lastUpdated: 'xxxxxxx'
};

const fetchExperimentsInit = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchExperimentsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchExperimentsSuccess = (state, action) => {

    return updateObject(state, {
        loading: false,
        //experiments:  action.experiments
    });
};

const fetchExperimentsFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const setExperiments = (state, action) => {
    return updateObject(state, {experiments: action.experiments});
};

export const fetchExperiments = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        // TODO This could be the issue for failed management experiment fetching
        let {token} = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }

        return fetch("/api/Experiments/", {headers, })
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return dispatch({type: 'SET_EXPERIMENTS', experiments: res.data});
                } else if (res.status === 401 || res.status === 403) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_EXPERIMENTS_START:
            return fetchExperimentsStart(state, action);
        case actionTypes.FETCH_EXPERIMENTS:
            return fetchExperiments(state, action);
        case actionTypes.FETCH_EXPERIMENTS_SUCCESS:
            return fetchExperimentsSuccess(state, action);
        case actionTypes.FETCH_EXPERIMENTS_FAIL:
            return fetchExperimentsFail(null, action);
        case actionTypes.SET_EXPERIMENTS:
            return setExperiments(state, action);
        default:
            return state;
    }
};

export default reducer;