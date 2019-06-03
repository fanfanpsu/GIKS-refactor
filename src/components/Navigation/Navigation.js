import React from 'react';
import { Link } from "react-router-dom";

import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import classes from './Navigation.css'
/**
 * this is a purely display only component
 */
export default class Example extends React.Component {

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
            <div >
                <Nav

                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item >
                        <Nav.Link to="/">GIKS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link href="/team">OUR TEAM</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="OUR RESEARCH" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Projects</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.2">Publications</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
            </div>
        );
    }
}