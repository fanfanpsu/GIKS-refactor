import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
                <Nav className={classes3}>
                    <NavItem className={classes4}>
                        <NavLink href="#">OUR TEAM</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar className={classes4}>
                        <DropdownToggle nav caret>
                            OUR RESEARCH
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink href="#">Projects</NavLink>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <NavLink href="management">Publications</NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </div>
            /*
            <div className={ "container"}>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">GIKS</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/management">OUR TEAM</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    OUR RESEARCH
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        PROJECT
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        PUBLICATIONS
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>*/
        );
    }
}