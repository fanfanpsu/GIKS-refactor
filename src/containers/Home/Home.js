import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';


import BurgerBuilder from '../BurgerBuilder/BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {}

    componentDidMount () {
        // this.props.onInitIngredients();
    }



    render () {
        let burger = null;

        // {salad: true, meat: false, ...}
        return (
            <Fragment>
               This is the home page of GIKS, it has no top nav bar
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Home, axios ));