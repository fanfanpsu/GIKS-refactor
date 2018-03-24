import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';


import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import Navigation from "../../components/Navigation/Navigation";
import Expcards from "../../components/Expcard/ExpCards";
import classes from "./management.css"

class Management extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        experiments: [{title: "t1", subtitle: "st1", cardcontent: "cc1"}],
        loading: true,
        didInvalidate: true,
        lastUpdated: 'xxxxxxx'
    }

    componentDidMount() {
        this.props.onManagementLoad();
    }


    render() {

        return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    <Expcards experiments={this.props.experiments}/>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // username : state.nav.username
        // internal : external
        experiments: state.managementBuilder.experiments,
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onManagementLoad: (experiments) => dispatch(actions.setManagementExperiments(experiments)),
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Management, axios));