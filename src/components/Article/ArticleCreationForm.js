import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {
    Col,
    Button,
    Form,
    FormGroup,
} from 'react-bootstrap';

import Spinner from '../../components/UI/Spinner/Spinner';
import ArticleCreationTemplate from "./ArticleCreationTemplate.js"
import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';


class ArticleCreationForm extends Component {
    constructor(props) {
        super(props);
        this.state = updateObject(this.state, {});  // Maybe no need to update any states
    }

    // TODO is this state in experiment creation still necessary?
    state = {}

    componentDidMount() {

    }

    // TODO Make this function reusable, add to utility.js ?
    inputChangedHandler = (event, controlName) => {
        // once anything changed in the input field, this method is triggered
        // and will trigger the check for validity for all the inputs
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitCreateArticlesHandler = (event) => {
        event.preventDefault();
        // TODO: update this with separate the sign up and sign on functions.
        alert("submitCreateArticlesHandler");
        // TODO understand how the states were set
        this.props.onCreateArticles(this.state.controls.email.value);
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
            <input
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

        // TODO Implement the dynamic adding article elements, such as new article, and delete created article
        return (
            <Fragment>
                {authRedirect}
                <Form onSubmit={this.submitCreateArticlesHandler}>
                    <ArticleCreationTemplate></ArticleCreationTemplate>


                </Form>
                {errorMessage}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error   // TODO remember to set the nested state for reducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // All the dynamic article creation will happened in the component, so no need to dispatch anything.
        submitCreateArticlesHandler: (a, b, c) => dispatch(actions.auth(a, b, c)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationForm);