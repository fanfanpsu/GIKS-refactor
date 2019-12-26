import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

const localmock = true
let create_article_url = `/api/article/create/`;  //TODO Consider use restful rule instead of url

export const createArticlesStart = () => {
    return {
        type: actionTypes.CREATE_ARTICLE_START
    };
};

export const createArticlesSuccess = () => {
    return {
        type: actionTypes.CREATE_ARTICLE_SUCCESS
    };
};

export const createArticlesFail = (error) => {
    return {
        error: error,
        type: actionTypes.CREATE_ARTICLE_FAIL
    };
};

export const createArticles = (articleCollection) => {
    return dispatch => {
        dispatch(createArticlesStart());

        if (localmock) {
            dispatch(createArticlesSuccess());
        } else {
            axios.post(create_article_url, articleCollection)
                .then(response => {
                    dispatch(createArticlesSuccess(response.data.TODO));
                })
                .catch(err => {
                    dispatch(createArticlesFail(err.response.data.error));
                });
        }
    };
};