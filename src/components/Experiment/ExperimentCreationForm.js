import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';


import * as actions from '../../store/actions/index';
import {updateObject, checkValidity} from '../../shared/utility';

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
        alert("submitCreateExperimentHandler");
        //TODO Update this to a more general react form submission
        this.props.onCreateExperiment();
    }

    render() {

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <Fragment>
                {/*{authRedirect}*/}
                <Form onSubmit={this.submitCreateExperimentHandler}>
                    <FormGroup row>
                        <Label for="experiment_title" sm={5}>Experiment Title</Label>
                        <Col sm={7}>
                            <Input type="text" name="experiment_title" id="experiment_title"
                                   placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="experiment_description" sm={5}>Experiment Description</Label>
                        <Col sm={7}>
                            <Input type="area" name="experiment_description" id="experiment_description"
                                   placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="amount_of_participant" sm={5}>Amount of participants</Label>
                        <Col sm={7}>
                            <Input type="text" name="amount_of_participant" id="amount_of_participant"
                                   placeholder=""/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col sm={{size: 12}}>
                            <Button as="input" type="submit" value="Submit"/>
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
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateExperiment: () => dispatch(actions.createExperiment("","","")),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperimentForm);