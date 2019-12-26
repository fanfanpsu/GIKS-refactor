import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import raw_experiments from '../../assets/rawdata/rawdata'
import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer'

// TODO find how to nest initial state
const initialState = {
    experiment: null,
    loading: false
};

const createExperimentsStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const createExperimentsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        experiment: action.experiment   // TODO Update this mechanism
    });
};

const createExperimentsFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error:action.error  //TODO Update how the error is returned and set
    });
};

// TODO 实际的restfulcall应该放在action还是reducer里？
export const fetchExperiments = () => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
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
        case actionTypes.CREATE_EXPERIMENTS_START:
            return createExperimentsStart(state, action);
        case actionTypes.CREATE_EXPERIMENTS_SUCCESS:
            return createExperimentsSuccess(state, action);
        case actionTypes.CREATE_EXPERIMENTS_FAIL:
            return createExperimentsFail(state, action);
        default:
            return state;
    }
};

export default reducer;