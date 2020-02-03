import React, {Component, Fragment} from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import {connect} from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

// this css aligns the layout of all cards with same height
import ExperimentCreationForm from "../../components/Experiment/ExperimentCreationForm"

class ExperimentBuilder extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <Fragment>
                <Row>
                    <Col xs={0} lg={2}></Col>
                    <Col xs={12} lg={8}>
                        <ExperimentCreationForm></ExperimentCreationForm>
                    </Col>
                    <Col xs={0} lg={2}></Col>
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