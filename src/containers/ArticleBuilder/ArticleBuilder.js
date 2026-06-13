import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Row} from 'reactstrap';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

import ArticleCreationForm from "../../components/Article/ArticleCreationForm"

class ExperimentBuilder extends Component {

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <Fragment>
                <Row>
                    <ArticleCreationForm></ArticleCreationForm>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ExperimentBuilder, axios));