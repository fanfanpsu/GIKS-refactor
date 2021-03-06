import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
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
import classnames from 'classnames';

import Login from "./Login/Login"
import Register from "./Register/Register"


let AuthRoutes = (
    <Switch>
        {/*<PrivateRoute exact path="/" component={PonyNote} />*/}
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
);

class Auth extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = updateObject(this.state, {activeTab: 'signup'});
    }

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
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
        }
    }

    componentDidMount() {
        if (/*!this.props.buildingManagement && */ this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
    }

    inputChangedHandler = (event, controlName) => {
        // once anything changed in the input field, this method is triggered
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitSignInHandler = (event) => {
        event.preventDefault();
        // TODO: update this with separate the sign up and sign on functions.
        alert("submitSignInHandler");
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    submitSignUpHandler = (event) => {
        event.preventDefault();
        // TODO: update this with separate the sign up and sign on functions.
        alert("submitSignUpHandler");
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    // TODO figure out how to use this method
    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        //TODO: figure out what is this
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
            // TODO remember to make this into a component
            // TODO 实现这个嵌套路由： https://reacttraining.com/react-router/web/example/nesting
            <Fragment>
                {authRedirect}
                <Jumbotron>
                    <Nav tabs className={"d-flex justify-content-center"}>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === 'signup'})}
                                onClick={() => {
                                    this.toggle('signup');
                                }}
                            >Sign Up</NavLink>
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
                                    <Label for="authEmail" sm={4}>Email</Label>
                                    <Col sm={8}>
                                        <Input type="email" name="email" id="authEmail"
                                               placeholder="Please enter email as username"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="authPassword" sm={4}>Password</Label>
                                    <Col sm={8}>
                                        <Input type="password" name="password" id="authPassword"
                                               placeholder=""/>
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
                                    <Label for="signupEmail" sm={5}>Email</Label>
                                    <Col sm={7}>
                                        <Input type="email" name="email" id="signupEmail"
                                               placeholder="Email as user name"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="signupPassword" sm={5}>Password</Label>
                                    <Col sm={7}>
                                        <Input type="password" name="password" id="signupPassword"
                                               placeholder="Enter your password"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="signupPasswordConfirm" sm={5}>Retype Password</Label>
                                    <Col sm={7}>
                                        <Input type="password" name="password" id="signupPasswordConfirm"
                                               placeholder="Confirm your password"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{size: 12}}>
                                        <Button>Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </TabPane>
                    </TabContent>
                </Jumbotron>
                {errorMessage}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
        isAuthenticated: state.auth.isAuthenticated,
        authRedirectPath: state.auth.authRedirectPath,
        authToken: localStorage.getItem("authToken"), //TODO Do we really need this?
        testing: state.auth.testing
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
        onLoadUser: () => dispatch(actions.loadUser()),
        onLogoutUser: () => dispatch(actions.logoutUser()),
        onRegister: (email, password) => dispatch(actions.register(email, password)),
        onLoginUser: (email, password) => dispatch(actions.loginUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);