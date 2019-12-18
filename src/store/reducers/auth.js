import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';


const initialState = {
    authToken: localStorage.getItem("authToken"), // ponynote
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: {},
    testing: "Testing reading from auth reducer",
    authRedirectPath: "/auth"
};

const updateAuthSuccess = (state, action) => {
    const updatedState = {
        isAuthenticated: true,
        isLoading: false,
        errors: null
    }
    return updateObject(state, updatedState);
};


const logoutAuth = (state, action) => {
    const updatedState = {
        isAuthenticated: true,
        isLoading: false,
        errors: null
    }
    return updateObject(state, updatedState);
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        // from ponynote
        case 'USER_LOADING':
            // TODO: is this sort of advanced object updating term?
            return {...state, isLoading: true};

        case 'USER_LOADED':
            return {...state, isAuthenticated: true, isLoading: false, user: action.user};

        case 'LOGIN_SUCCESSFUL':
        case 'AUTH_SUCCESS':
        case 'REGISTRATION_SUCCESSFUL':
            localStorage.setItem("authToken", action.data.authToken);
            return updateAuthSuccess(state, action);

        case 'AUTH_LOGOUT':
            localStorage.removeItem('authToken');
            localStorage.removeItem('authExpirationDate');
            localStorage.removeItem('authUserId');
            return logoutAuth(state, action);


        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("authToken");
            //TODO This needs to be updated.
            return {
                ...state, errors: action.data, authToken: null, user: null,
                isAuthenticated: false, isLoading: false
            };

        default:
            return state;
    }
}

export default authReducer;
