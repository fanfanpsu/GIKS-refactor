import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

import Footer from "../Footer/Footer";
import researcher_logo from '../../assets/images/researcher.png'; // Import using relative path
import student_logo from '../../assets/images/student.png'; // Import using relative path
import demo_logo from '../../assets/images/demo.png'; // Import using relative path

import Management from "../ManagementBuilder/Management";
import classes from './Home.css'
import {Container, Jumbotron} from "reactstrap";

class Home extends Component {

    state = {}

    render() {
        return (
            <Fragment>
                <Jumbotron className = {"text-center"}>
                    <Container>
                        <h1 className={"display-4"}>Graphical Interface of Knowledge Structure</h1>
                        <p className={"lead"}>GIKS is designed to caputre, visually represent, and compare the
                            "knowledge structure" inherent in a text, which can be used to identify individual learner's
                            knowledge gaps and/or misconceptions</p>
                    </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default Home;

// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));