import React, {Component, Fragment} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import classes from './Navigation.css'
import * as actions from "../../store/actions";
import {connect} from "react-redux";

/**
 * this is a purely display only component
 */

function UserGreeting(isAuthenticated) {
    return <Fragment>Welcome back: <a href="#login"></a></Fragment>;
}

function GuestGreeting(isAuthenticated) {
    return <Fragment><a href="auth">Login</a></Fragment>;
}

function Greeting(props) {
    const isLoggedIn = props.isAuthenticated;

    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log((this.props.isAuthenticated))
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="home">GIKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Greeting isAuthenticated={this.props.isAuthenticated}/>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
        );
    }


}

const mapStateToProps = state => {
    return {
        // the state.auth.token is from the reducer mapping, the auth is the authReducer
        isAuthenticated: state.auth.isAuthenticated,
        authToken : state.auth.authToken

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // TODO Maybe auto sign in shouldn't be handled by navigation bar?
        onTryAutoSignIn: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));