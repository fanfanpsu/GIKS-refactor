import React, {Component, Fragment} from 'react';
import {Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

// this css aligns the layout of all cards with same height
import ExperimentForm from "../../components/Experiment/experimentCreationForm"

class ExperimentBuilder extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount(){

    }

    render() {
        let ExperimentForm = ExperimentForm;

        return (
            <Fragment>
                <Row>
                    {ExperimentForm}
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
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ExperimentBuilder, axios));