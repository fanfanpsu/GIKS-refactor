import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {
    Jumbotron,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';
import { updateObject } from '../../shared/utility';
import classnames from 'classnames';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = updateObject( this.state, { activeTab: 'signup'});
    }

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

    componentDidMount() {

        if (/*!this.props.buildingManagement && */ this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }


        console.log(this.props.isLoading);
        console.log(this.props.error);
        console.log(this.props.isAuthenticated);
        console.log(this.props.authRedirectPath);
        console.log(this.props.testing);
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        // TODO: update this with separate the sign up and sign on functions.
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }


    // added from reactstrap
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        if (this.props.loading) {
            form = <Spinner/>
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <Fragment>
                {/*<Jumbotron>*/}
                {/*    <Nav tabs className={"d-flex justify-content-center"}>*/}
                {/*        <NavItem>*/}
                {/*            <NavLink*/}
                {/*                className={classnames({active: this.state.activeTab === 'signup'})}*/}
                {/*                onClick={() => {*/}
                {/*                    this.toggle('signup');*/}
                {/*                }}*/}
                {/*            >Sign Up*/}
                {/*            </NavLink>*/}
                {/*        </NavItem>*/}
                {/*        <NavItem>*/}
                {/*            <NavLink*/}
                {/*                className={classnames({active: this.state.activeTab === 'signin'})}*/}
                {/*                onClick={() => {*/}
                {/*                    this.toggle('signin');*/}
                {/*                }}*/}
                {/*            >Sign In</NavLink>*/}
                {/*        </NavItem>*/}
                {/*    </Nav>*/}
                {/*    <TabContent activeTab={this.state.activeTab} className={"d-flex justify-content-center"}>*/}
                {/*        <TabPane tabId="signin">*/}
                {/*            <Form>*/}
                {/*                <FormGroup row>*/}
                {/*                    <Label for="exampleEmail" sm={4}>Email</Label>*/}
                {/*                    <Col sm={8}>*/}
                {/*                        <Input type="email" name="email" id="exampleEmail"*/}
                {/*                               placeholder="with a placeholder"/>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*                <FormGroup row>*/}
                {/*                    <Label for="examplePassword" sm={4}>Password</Label>*/}
                {/*                    <Col sm={8}>*/}
                {/*                        <Input type="password" name="password" id="examplePassword"*/}
                {/*                               placeholder="password placeholder"/>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}

                {/*                <FormGroup check row>*/}
                {/*                    <Col sm={{size: 12}}>*/}
                {/*                        <Button>Submit</Button>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*            </Form>*/}
                {/*        </TabPane>*/}
                {/*        <TabPane tabId="signup">*/}
                {/*            <Form>*/}
                {/*                <FormGroup row>*/}
                {/*                    <Label for="exampleEmail" sm={5}>Email</Label>*/}
                {/*                    <Col sm={7}>*/}
                {/*                        <Input type="email" name="email" id="exampleEmail"*/}
                {/*                               placeholder="with a placeholder"/>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*                <FormGroup row>*/}
                {/*                    <Label for="examplePassword" sm={5}>Password</Label>*/}
                {/*                    <Col sm={7}>*/}
                {/*                        <Input type="password" name="password" id="examplePassword"*/}
                {/*                               placeholder="password placeholder"/>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*                <FormGroup row>*/}
                {/*                    <Label for="examplePassword" sm={5}>Retype Password</Label>*/}
                {/*                    <Col sm={7}>*/}
                {/*                        <Input type="password" name="password" id="examplePassword"*/}
                {/*                               placeholder="password placeholder"/>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*                <FormGroup check row>*/}
                {/*                    <Col sm={{size: 10, offset: 2}}>*/}
                {/*                        <Button>Submit</Button>*/}
                {/*                    </Col>*/}
                {/*                </FormGroup>*/}
                {/*            </Form>*/}
                {/*        </TabPane>*/}
                {/*    </TabContent>*/}
                {/*</Jumbotron>*/}

                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                {form}
                <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button
                clicked={this.switchAuthModeHandler}
                btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated, //state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        token: localStorage.getItem("token"),
        testing: state.auth.testing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),

        onLoadUser:  () => dispatch(actions.loadUser()),
        onLogoutUser:  () => dispatch(actions.logoutUser()),
        onRegister:   (email, password) => dispatch(actions.register(email, password)),
        onLoginUser:  (email, password) => dispatch(actions.loginUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);