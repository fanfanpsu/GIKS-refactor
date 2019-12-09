import React, {Fragment} from 'react';
import {Button, Form} from 'react-bootstrap';
import {Col, FormGroup, Input, Jumbotron, Label, Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

const AuthTable = (props) => {
    return (
        <Fragment>
            <Jumbotron>
                <Nav tabs className={"d-flex justify-content-center"}>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'signup'})}
                            onClick={() => {
                                this.toggle('signup');
                            }}
                        >Sign Up
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === 'signin'})}
                            onClick={() => {
                                this.toggle('signin');
                            }}
                        >Sign In</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab} className={"d-flex justify-content-center"}>
                    <TabPane tabId="signin">
                        <Form onSubmit={this.submitSignInHandler}>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={4}>Email</Label>
                                <Col sm={8}>
                                    <Input type="email" name="email" id="exampleEmail"
                                           placeholder="with a placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={4}>Password</Label>
                                <Col sm={8}>
                                    <Input type="password" name="password" id="examplePassword"
                                           placeholder="password placeholder"/>
                                </Col>
                            </FormGroup>

                            <FormGroup check row>
                                <Col sm={{size: 12}}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </TabPane>
                    <TabPane tabId="signup">
                        <Form onSubmit={this.submitSignUpHandler}>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={5}>Email</Label>
                                <Col sm={7}>
                                    <Input type="email" name="email" id="exampleEmail"
                                           placeholder="with a placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={5}>Password</Label>
                                <Col sm={7}>
                                    <Input type="password" name="password" id="examplePassword"
                                           placeholder="password placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={5}>Retype Password</Label>
                                <Col sm={7}>
                                    <Input type="password" name="password" id="examplePassword"
                                           placeholder="password placeholder"/>
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{size: 10, offset: 2}}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </TabPane>
                </TabContent>
            </Jumbotron>
        </Fragment>
    );
}

export default AuthTable;
