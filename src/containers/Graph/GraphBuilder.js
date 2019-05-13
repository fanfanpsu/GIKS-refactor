import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class GraphBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...}
    }
    // this state is called initial state, or class property
    state = {}

    componentDidMount () {
        this.props.onInitGraph();
    }

    render () {
        return (
            <Fragment>
            </Fragment>
        );
    }
}

// this is dual binding
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onGraphUpdated:  () => alert("about to dispactch the graphupdate")//dispatch(actions.purchaseInit())
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( GraphBuilder, axios ));