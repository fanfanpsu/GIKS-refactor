import axios from 'axios';

import * as actionTypes from './actionTypes';

let register_url = `/api/auth/register/`;
let REGISTER_URL = `/api/auth/register/`;

let login_url = `/api/auth/login/`; // TODO convert this to nested URL
let SIGNIN_URL = `/api/auth/login/`;

let logout_url = `/api/auth/logout/`;
let SIGNOUT_URL = `/api/auth/logout/`;

const localmock = true

export const authStart = () => {
    alert("auth started")
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authToken, authUserId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data: {
            authToken: authToken,
            authUserId: authUserId
        }

    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

//todo This function need to be more meaningful like authSignInSignUp
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = register_url;
        if (!isSignup) {
            url = login_url;
        }
        if (localmock) {
            dispatch(authSuccess("localmockup-token", "localmockup-id"));
            dispatch(checkAuthTimeout("localmockup-exp-time"));

        } else {

            axios.post(url, authData)
                .then(response => {
                    const authExpirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

                    localStorage.setItem('authToken', response.data.idToken);
                    localStorage.setItem('authExpirationDate', authExpirationDate);
                    localStorage.setItem('authUserId', response.data.localId);

                    dispatch(authSuccess(response.data.idToken, response.data.localId));
                    dispatch(checkAuthTimeout(response.data.expiresIn));

                })
                .catch(err => {
                    dispatch(authFail(err.response.data.error));
                });
        }

    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const authToken = localStorage.getItem('authToken');
        if (!authToken) {
            dispatch(logout());
        } else {
            const authExpirationDate = new Date(localStorage.getItem('authExpirationDate'));
            if (authExpirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const authUserId = localStorage.getItem('authUserId');
                dispatch(authSuccess(authToken, authUserId));
                dispatch(checkAuthTimeout((authExpirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};

export const loadUser = () => {
    return (dispatch, getState) => {
        dispatch({type: "USER_LOADING"});

        const authToken = getState().auth.authToken;

        let headers = {
            "Content-Type": "application/json",
        };

        if (authToken) {
            // This header's setup cannot be changed.
            headers["Authorization"] = `Token ${authToken}`;
        }

        return fetch("/api/auth/user/", {headers,})
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
                    dispatch({type: 'USER_LOADED', user: res.data});
                    return res.data;
                } else if (res.status >= 400 && res.status < 500) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const loginUser = (username, password) => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({username, password});

        return fetch("/api/auth/login/", {headers, body, method: "POST"})
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
                    dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    dispatch({type: "LOGIN_FAILED", data: res.data});
                    throw res.data;
                }
            })
    }
}

export const register = (username, password) => {
    return (dispatch, getState) => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({username, password});

        return fetch("/api/auth/register/", {headers, body, method: "POST"})
            .then(res => {
                if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 200) {
                    dispatch({type: 'REGISTRATION_SUCCESSFUL', data: res.data});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                } else {
                    dispatch({type: "REGISTRATION_FAILED", data: res.data});
                    throw res.data;
                }
            })
    }
}


export const logout = () => {
    //TODO Revise this block?
    return (dispatch, getState) => {
        if(getState.auth.isAuthenticated){
            dispatch(logoutUser());
        } else {
            return {
                type: actionTypes.AUTH_LOGOUT
            };
        }
    }
};

export const logoutUser = () => {
    return (dispatch, getState) => {

        let headers = {"Content-Type": "application/json"};

        return fetch("/api/auth/logout/", {headers, body: "", method: "POST"})
            .then(res => {
                if (res.status === 204) {
                    return {status: res.status, data: {}};
                } else if (res.status < 500) {
                    return res.json().then(data => {
                        return {status: res.status, data};
                    })
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
            .then(res => {
                if (res.status === 204) {
                    dispatch({type: 'LOGOUT_SUCCESSFUL'});
                    return res.data;
                } else if (res.status === 403 || res.status === 401) {
                    dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
                    throw res.data;
                }
            })
    }
}