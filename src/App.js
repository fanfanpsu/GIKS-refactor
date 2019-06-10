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
import Login from "./containers/Auth/Login";
import NotFound from "./containers/NotFound/NotFound";

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

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            isAuthenticating: true
        };
    }

    userHasAuthenticated = authenticated => {
        this.setState({ isAuthenticated: authenticated });
    }

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {

        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };

        //  TODO rewrite route with
        //  https://stackoverflow.com/questions/53654379/how-to-pass-props-into-component-from-react-router-switch-statement
        //  with consider this: https://serverless-stack.com/chapters/add-the-session-to-the-state.html
        let routes = (
            <Switch childProps={childProps}>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/management" component={Management}/>
                <Route path="/demo" component={Demo}/>
                <Route path="/login" exact component={Login}/>

                <Route path="/" exact component={Home}/>
                <Route component={NotFound} />
                <Redirect to="/"/>
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/logout" component={Logout} />
                    <Route path="/auth" component={asyncAuth} />

                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <Fragment>
                <Navigation />
                <Layout>
                {routes}
                    {/*<Routes childProps={childProps} />*/}
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