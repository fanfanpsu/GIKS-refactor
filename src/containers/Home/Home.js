/* global _ */
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';

// import {
//     CardDeck, Card, CardImg, CardText, CardBody,
// } from 'reactstrap';

import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

import Footer from "../Footer/Footer";
import researcher_logo from '../../assets/images/researcher.png'; // Import using relative path
import student_logo from '../../assets/images/student.png'; // Import using relative path
import demo_logo from '../../assets/images/demo.png'; // Import using relative path

import Management from "../Management/Management";
import classes from './Home.css'
import Demo from "../Demo/Demo";

class Home extends Component {
    state = {}

    componentDidMount() {}
    render() {

        let routes = (
            <Switch>
                <Route path="/management" component={Management}/>
                <Redirect to="/"/>
            </Switch>
        );
        return (
            <Fragment>
                <Container>
                    {/*<h1 className={"display-4"}>Graphical Interface of Knowledge Structure</h1>*/}
                    {/*<p className={"lead"}>GIKS is designed to caputre, visually represent, and compare the*/}
                    {/*    "knowledge structure" inherent in a text, which can be used to identify individual learner's*/}
                    {/*    knowledge gaps and/or misconceptions</p>*/}
                <div> test</div>
                </Container>
                {/*<Container>*/}
                {/*    <CardDeck>*/}

                {/*        <Card>*/}
                {/*            <Link to="/management">*/}
                {/*                <CardImg top width="100%"*/}
                {/*                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"*/}
                {/*                         alt="Card image cap"/>*/}
                {/*            </Link>*/}
                {/*            <CardBody>*/}
                {/*                <CardText>This is a wider card with supporting text below as a natural lead-in to*/}
                {/*                    additional*/}
                {/*                    content. This content is a little bit longer.</CardText>*/}
                {/*            </CardBody>*/}

                {/*        </Card>*/}

                {/*        <Card>*/}
                {/*            <CardImg top width="100%"*/}
                {/*                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"*/}
                {/*                     alt="Card image cap"/>*/}
                {/*            <CardBody>*/}
                {/*                <CardText>This card has supporting text below as a natural lead-in to additional*/}
                {/*                    content.</CardText>*/}
                {/*            </CardBody>*/}
                {/*        </Card>*/}
                {/*        <Card>*/}
                {/*            <CardImg top width="100%"*/}
                {/*                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"*/}
                {/*                     alt="Card image cap"/>*/}
                {/*            <CardBody>*/}
                {/*                <CardText>This is a wider card with supporting text below as a natural lead-in to*/}
                {/*                    additional*/}
                {/*                    content. This card has even longer content than the first to show that equal height*/}
                {/*                    action.</CardText>*/}
                {/*            </CardBody>*/}
                {/*        </Card>*/}
                {/*    </CardDeck>*/}
                {/*</Container>*/}
                {/*/!*<Footer/>*!/*/}

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));