import React, {Component} from "react";
import {Button, FormGroup, FormControl, Form} from "react-bootstrap";
import FormLabel from "react-bootstrap/FormLabel";
import { Auth } from "aws-amplify";

import "./Auth.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        try {
            // TODO: adjust this to django 2.0 version
            await Auth.signIn(this.state.email, this.state.password);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }


    render() {
        return (
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="email" bsSize="large">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password" bsSize="large">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </Form.Group>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </div>
        );
    }
}

export default Login;