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
    Card,
    CardTitle,
    CardText,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

// import Input from '../../components/UI/Input/Input';
// import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
// import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';
import classnames from 'classnames';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            ...this.state,
            activeTab: 'signup'
        };
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
        if (!this.props.buildingManagement && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath();
        }
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
                            <Form>
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
                            <Form>
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}>Email</Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail"
                                               placeholder="with a placeholder"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password placeholder"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="examplePassword" sm={2}>Retype Password</Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="examplePassword"
                                               placeholder="password placeholder"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                                    <Col sm={10}>
                                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleText" sm={2}>Text Area</Label>
                                    <Col sm={10}>
                                        <Input type="textarea" name="text" id="exampleText"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="exampleFile" sm={2}>File</Label>
                                    <Col sm={10}>
                                        <Input type="file" name="file" id="exampleFile"/>
                                        <FormText color="muted">
                                            This is some placeholder block-level help text for the above input.
                                            It's a bit lighter and easily wraps to a new line.
                                        </FormText>
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

                {authRedirect}
                {errorMessage}
                {/*<form onSubmit={this.submitHandler}>*/}
                {/*{form}*/}
                {/*<Button btnType="Success">SUBMIT</Button>*/}
                {/*</form>*/}
                {/*<Button*/}
                {/*clicked={this.switchAuthModeHandler}*/}
                {/*btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>*/}

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        buildingManagement: state.managementBuilder.loading,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);