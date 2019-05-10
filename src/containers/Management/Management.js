import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import Navigation from "../../components/Navigation/Navigation";
import Expcards from "../../components/Expcard/ExpCards";

// this css aligns the layout of all cards with same height
import classes from "./management.css"

import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer.js';
import {updateObject} from "../../shared/utility";

class Management extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        experiments: [],
        loading: true,
        didInvalidate: true,
        lastUpdated: 'xxxxxxx'
    }

    componentDidMount() {
        // this.state.experiments = raw_experiments_fewer;
    }

    componentWillMount(){
        this.props.onManagementLoad(this.state.experiments);
    }

    render() {

        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <Fragment>
                {/*{authRedirect}*/}
                <Row className={"row-eq-height"}>
                    <Expcards experiments={this.props.experiments}/>
                </Row>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // username : state.nav.username
        // internal : external
        experiments: state.managementBuilder.experiments,
        authRedirectPath: state.auth.authRedirectPath
        // isAuthenticated: state.auth.token !== null
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Management, axios));