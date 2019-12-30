import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {} from 'react-bootstrap';

import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';


class ArticleCreationTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = updateObject(this.state, {});  // Maybe no need to update any states
    }

    state = {}

    componentDidMount() {

    }

    render() {

        // textarea
        // nodes, and Synonyms
        // Graph
        return (
            <Fragment>

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error   // TODO remember to set the nested state for reducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitCreateArticlesHandler: (a, b, c) => dispatch(actions.auth(a, b, c)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationTemplate);