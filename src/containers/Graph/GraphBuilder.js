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
    state = {
        nodes: [
            { data: { id: 'cat' } },
            { data: { id: 'bird' } },
            { data: { id: 'ladybug' } },
            { data: { id: 'aphid' } },
            { data: { id: 'rose' } },
            { data: { id: 'grasshopper' } },
            { data: { id: 'plant' } },
            { data: { id: 'wheat' } }
        ],
        edges: [
            // { data: { source: 'cat', target: 'bird' } },
            // { data: { source: 'bird', target: 'ladybug' } },
            // { data: { source: 'bird', target: 'grasshopper' } },
            // { data: { source: 'grasshopper', target: 'plant' } },
            // { data: { source: 'grasshopper', target: 'wheat' } },
            // { data: { source: 'ladybug', target: 'aphid' } },
            // { data: { source: 'aphid', target: 'rose' } }
        ]
    }

    componentDidMount () {
        this.props.onInitGraph();

    }

    updateGraph ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        return sum > 0;
    }

    // placeholder function
    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState( { purchasing: true } );
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render () {
        const disabledInfo = {
            ...this.props.ings
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if ( this.props.ings ) {
            burger = (
                <Fragment>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth={this.props.isAuthenticated}
                        price={this.props.price} />
                </Fragment>
            );
        }
        // {salad: true, meat: false, ...}
        return (
            <Fragment>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
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
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName))
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( GraphBuilder, axios ));