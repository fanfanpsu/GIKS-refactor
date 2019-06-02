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
        const nav = `d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom box-shadow`;
        return (
            <div className={nav}>
                <Navbar.Brand><Link to="/">GIKS</Link></Navbar.Brand>
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {/*<Nav className={classes3}>*/}
                {/*    <NavItem className={classes4}>*/}
                {/*        <NavLink href="#">OUR TEAM</NavLink>*/}
                {/*    </NavItem>*/}
                {/*    <UncontrolledDropdown nav inNavbar className={classes4}>*/}
                {/*        <DropdownToggle nav caret>*/}
                {/*            OUR RESEARCH*/}
                {/*        </DropdownToggle>*/}
                {/*        <DropdownMenu right>*/}
                {/*            <DropdownItem>*/}
                {/*                <NavLink href="#">Projects</NavLink>*/}
                {/*            </DropdownItem>*/}
                {/*            <DropdownItem divider />*/}
                {/*            <DropdownItem>*/}
                {/*                <NavLink href="management">Publications</NavLink>*/}
                {/*            </DropdownItem>*/}
                {/*        </DropdownMenu>*/}
                {/*    </UncontrolledDropdown>*/}
                {/*</Nav>*/}
            </div>
        );
    }
}