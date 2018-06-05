import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import raw_experiments from '../rawdata/rawdata'

const initialState = {
    experiments:raw_experiments.experiments,
    loading: true,
    didInvalidate: true,
    lastUpdated: 'xxxxxxx'
};

const fetchExperimentsInit = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchExperimentsStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchExperimentsSuccess = ( state, action ) => {

    return updateObject( state, {
        loading: false,
        experiments:  action.newExperiments
    } );
};

const fetchExperimentsFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const setExperiments = (state, action) => {
    // alert("setting up data: experiments");
    // console.log(updateObject( state, {experiments: action.experiments}));
    return updateObject( state, {experiments: action.experiments});
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.FETCH_EXPERIMENTS_START: return fetchExperimentsStart( state, action );
        case actionTypes.FETCH_EXPERIMENTS_SUCCESS: return fetchExperimentsSuccess( state, action );
        case actionTypes.FETCH_EXPERIMENTS_FAIL: return fetchExperimentsFail( null, action );
        case actionTypes.SET_EXPERIMENTS: return setExperiments( state, action );
        default: return state;
    }
};

export default reducer;