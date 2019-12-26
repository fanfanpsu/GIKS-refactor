import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {
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
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
    </Switch>
);

class ExperimentForm extends Component {
    constructor(props) {
        super(props);
        this.state = updateObject(this.state, {});  // Maybe no need to update any states
    }

    // TODO is this state in experiment creation still necessary?
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
            //this.props.onSetAuthRedirectPath();
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

    submitCreateExperimentHandler = (event) => {
        event.preventDefault();
        // TODO: update this with separate the sign up and sign on functions.
        alert("submitCreateExperimentHandler");
        this.props.submitCreateExperimentHandler(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    render() {
        //TODO: figure out what is this for experiment creation
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
                {authRedirect}
                <Form onSubmit={this.submitCreateExperimentHandler}>
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
                {errorMessage}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,    // TODO Do we really need to pass in any state value?
        error:state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateExperiment: (a, b, c) => dispatch(actions.createExperiment(a, b, c)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentForm);