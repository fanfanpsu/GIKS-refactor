import React, {Component, Fragment} from 'react';
import {Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateObject} from "../../shared/utility";

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Expcards from "../../components/Expcard/ExpCards";

// this css aligns the layout of all cards with same height
import classes from "./management.css"
import ExperimentForm from "../../components/Experiment/experimentCreationForm"
import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer.js';

class ExpermentBuilder extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        experiments: [],
        loading: true,
        didInvalidate: true,
        lastUpdated: 'xxxxxxx'
    }

    componentDidMount() {

    }

    componentWillMount(){
        this.props.onManagementLoad(this.state.experiments);
    }

    render() {

        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <Fragment>
                {authRedirect}
                {errorMessage}
                <Row className={"row-eq-height"}>
                    {ExperimentForm}
                </Row>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        experiments: state.managementBuilder.experiments,
        authRedirectPath: state.auth.authRedirectPath,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onManagementLoad: () => dispatch(actions.initManagementExpPanels())
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ExpermentBuilder, axios));