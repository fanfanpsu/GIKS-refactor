import React, { Component } from "react";
import {
    Form

} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Signup.css";

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        this.setState({ newUser: "test" });

        this.setState({ isLoading: false });
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }

    renderConfirmationForm() {
        return (
            <form onSubmit={this.handleConfirmationSubmit}>
                <Form.Group controlId="confirmationCode" bsSize="large">
                    <Form.Control>Confirmation Code</Form.Control>
                    <Form.Control
                        autoFocus
                        type="tel"
                        value={this.state.confirmationCode}
                        onChange={this.handleChange}
                    />
                    {/*<HelpBlock>Please check your email for the code.</HelpBlock>*/}
                </Form.Group>
                <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateConfirmationForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Verify"
                    loadingText="Verifying…"
                />
            </form>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email" bsSize="large">
                    <Form.Control>Email</Form.Control>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" bsSize="large">
                    <Form.Control>Password</Form.Control>
                    <Form.Control
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </Form.Group>
                <Form.Group controlId="confirmPassword" bsSize="large">
                    <Form.Control>Confirm Password</Form.Control>
                    <Form.Control
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </Form.Group>
                <LoaderButton
                    block
                    bsSize="large"
                    disabled={!this.validateForm()}
                    type="submit"
                    isLoading={this.state.isLoading}
                    text="Signup"
                    loadingText="Signing up…"
                />
            </form>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}
