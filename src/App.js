import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';

import Navigation from "./components/Navigation/Navigation";

import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import Management from './containers/Management/Management';

import Demo from './containers/Demo/Demo';

import * as actions from './store/actions/index';

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});

// 这个asyncComponent 函数接受一个importComponent 的参数，importComponent 调用时候将动态引入给定的组件。
const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});

class App extends Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    // componentWillMount() {
    // }
    //
    // componentDidCatch(error, errorInfo) {
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    // }
    //
    // componentWillUnmount() {
    // }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    // }
    //
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/management" component={Management}/>
                <Route path="/demo" component={Demo}/>
                <Redirect to="/"/>
            </Switch>
        );


        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/logout" component={Logout} />
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <Fragment>
                <Navigation />
                <Layout>
                {routes}
                </Layout>
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