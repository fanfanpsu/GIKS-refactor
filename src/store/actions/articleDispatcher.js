import * as actionTypes from './actionTypes';
import axios from '../../axios-address';

const localmock = true
let create_article_url = `/api/article/create/`;  //TODO Consider use restful rule instead of url

export const createArticleStart = (article) => {

    return {
        article:article,
        type: actionTypes.CREATE_ARTICLE_START
    };
};

export const createArticleSuccess = () => {
    return {
        type: actionTypes.CREATE_ARTICLE_SUCCESS
    };
};

export const createArticleFail = (error) => {
    return {
        error: error,
        type: actionTypes.CREATE_ARTICLE_FAIL
    };
};

export const createArticles = (articleCollection) => {
    return dispatch => {
        dispatch(createArticleStart());

        if (localmock) {
            dispatch(createArticleSuccess());
        } else {
            axios.post(create_article_url, articleCollection)
                .then(response => {
                    dispatch(createArticleSuccess(response.data.TODO));
                })
                .catch(err => {
                    dispatch(createArticleFail(err.response.data.error));
                });
        }
    };
};