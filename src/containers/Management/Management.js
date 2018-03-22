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

class Management extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        expCards: [{title: "t1", subtitle: "st1", cardcontent: "cc1"}],
        loading: true,
        didInvalidate: true,
        lastUpdated: 'xxxxxxx'
    }

    componentDidMount() {
        //this.props.onManagementLoad();
    }


    render() {
        // let expCards = [
        //     {title: "t1", subtitle: "st1", cardcontent: "cc1"},
        //     {title: "t2", subtitle: "st2"},
        //     {title: "t3", subtitle: "st3"}];

        return (
            <Fragment>
                <Row>
                    top bar
                </Row>
                <Row>
                    <Expcards expCards={this.props.expCards}/>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // username : state.nav.username
        // internal : external
        expCards: state.managementBuilder.expCards,
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onManagementLoad: (user) => dispatch(actions.addIngredient(user)),
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Management, axios));