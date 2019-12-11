import React, {Fragment} from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import classes from './Navigation.css'

/**
 * this is a purely display only component
 */

function UserGreeting(props) {
    return <Fragment>Welcome back: <a href="#login"></a></Fragment>;
}

function GuestGreeting(props) {
    return <Fragment><a href="auth">Login</a></Fragment>;
}

function Greeting(props) {
    // TODO: Update this for a proper condition
    const isLoggedIn = props.isAuthenticated;

    if (isLoggedIn) {
        return <UserGreeting />;
    }

    return <GuestGreeting />;
}

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">GIKS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Greeting />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}