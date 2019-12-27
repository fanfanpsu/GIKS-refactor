import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

// this css aligns the layout of all cards with same height
import ArticleCreationForm from "../../components/Article/ArticleCreationForm"

class ExperimentBuilder extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {

        let articleRedirect = null;
        // TODO the ! is for testing only
        if (!this.props.isAuthenticated) {
            articleRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

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