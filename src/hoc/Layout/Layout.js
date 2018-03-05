import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Home from "../../containers/Home/Home";
import Management from "../../containers/Management/Management";

import Navigation from "../../components/Navigation/Navigation";
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {

        let routes = (
            <Switch>
                {/*<Route path="/auth" component={asyncAuth}/>*/}
                <Route path="/" exact component={Home}/>
                <Route path="/management" component={Management}/>
                {/*<Route path="/burgerbuilder" component={BurgerBuilder}/>*/}

                <Redirect to="/"/>
            </Switch>
        );

        return (

                <Fragment></Fragment>


        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);