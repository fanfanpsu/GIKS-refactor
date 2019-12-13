import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';

import Navigation from "./components/Navigation/Navigation";

import Logout from './containers/Auth/Logout/Logout';
import Home from './containers/Home/Home';
import Management from './containers/ManagementBuilder/Management';
import Experiment from './containers/Experiment/ExpermentBuilder'
import Article from './containers/ArticleBuilder/ArticleBuilder'
import Graph from './containers/GraphBuilder/GraphBuilder'

// TODO refactor this this to graph
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
        // TODO This works fine, remove it from comment
        //this.props.onTryAutoSignup();
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        // TODO: Rewrite the entire render implementation
        // TODO consider implement the private route from [Restricting unauthorized access]
        // http://v1k45.com/blog/modern-django-part-4-adding-authentication-to-react-spa-using-drf/




        let routes = (
            // TODO <BrowserRouter>?
            <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/auth" component={asyncAuth} />
                <Route path="/management" component={Management}/>
                <Route path="/experiment" component={Experiment}/>
                <Route path="/article" component={Article}/>
                <Route path="/graph" component={Graph}/>
                <Route path="/demo" component={Demo}/>
                <Route path="/" exact component={Home}/>
                <Redirect to="/"/>
            </Switch>
        );

        // TODO update this two routes into one
        if (!this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        routes.push()
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
        // the state.auth.token is from the reducer mapping, the auth is the authReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));