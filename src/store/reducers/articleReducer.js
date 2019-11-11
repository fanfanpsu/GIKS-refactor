import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import raw_article from '../../assets/rawdata/rawdata'


const initialState = {
    article: raw_article,
    loading: true
};

const fetchArticleInit = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchArticleStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const fetchArticleSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    });
};

const fetchArticleFail = (state, action) => {
    return updateObject(state, {loading: false});
};

const setArticle = (state, action) => {
    return updateObject(state, {experiments: action.experiments});
};

export const fetchArticle = () => {
    return (dispatch, getState) => {
        //TODO make the auth token into a global service for retrieving
        let headers = {"Content-Type": "application/json"};
        let {token} = getState().auth;

        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        //TODO update this API call
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

        case actionTypes.FETCH_ARTICLE_START:
            return fetchArticleStart(state, action);
        case actionTypes.FETCH_ARTICLE:
            return fetchArticle(state, action);
        case actionTypes.FETCH_ARTICLE_SUCCESS:
            return fetchArticleSuccess(state, action);
        case actionTypes.FETCH_ARTICLE_FAIL:
            return fetchArticleFail(null, action);
        case actionTypes.SET_ARTICLE:
            return setArticle(state, action);
        default:
            return state;
    }
};

export default reducer;