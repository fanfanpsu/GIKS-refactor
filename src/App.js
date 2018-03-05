import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Navigation from "./components/Navigation/Navigation";
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Home from './containers/Home/Home';

import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                {/*<Route path="/auth" component={asyncAuth}/>*/}
                <Route path="/" exact component={Home}/>
                <Route path="/management" component={Home}/>
                {/*<Route path="/burgerbuilder" component={BurgerBuilder}/>*/}

                <Redirect to="/"/>
            </Switch>
        );

        // if (this.props.isAuthenticated) {
        //     routes = (
        //         <Switch>
        //             <Route path="/checkout" component={asyncCheckout}/>
        //             <Route path="/orders" component={asyncOrders}/>
        //             <Route path="/logout" component={Logout}/>
        //             <Route path="/auth" component={asyncAuth}/>
        //             <Route path="/" exact component={BurgerBuilder}/>
        //             <Redirect to="/"/>
        //         </Switch>
        //     );
        // }

        return (
            <Fragment>
                <Navigation />
                {/*<Layout>*/}
                {/*{routes}*/}
                {/*</Layout>*/}
            </Fragment>

        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
