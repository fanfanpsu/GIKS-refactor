import React from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem } from 'reactstrap';

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
        const classes1 = `d-flex flex-column flex-md-row align-items-center p-1 px-md-4 mb-3 bg-white border-bottom box-shadow`;
        const classes2 = `my-0 mr-md-auto font-weight-normal`;
        const classes3 = `my-2 my-md-0 mr-md-3`;
        const classes4 = `p-2 text-dark`;
        return (
            <div className={classes1}>
                <h5 className={classes2}>GIKS</h5>
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Hello, {"user"}</Nav.Link>
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