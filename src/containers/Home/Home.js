/* global _ */
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import * as actions from '../../store/actions/index';

import {
    Container, CardDeck, Card, CardImg, CardText, CardBody,
} from 'reactstrap';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';
import Footer from "../Footer/Footer";
import researcher_logo from '../../assets/images/researcher.png'; // Import using relative path
import student_logo from '../../assets/images/student.png'; // Import using relative path
import demo_logo from '../../assets/images/demo.png'; // Import using relative path

import Management from "../Management/Management";
import classes from './Home.css'

class Home extends Component {
    state = {}

    componentDidMount() {}
    render() {
        const classes1 = `home-header`;
        const classes2 = `home-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center`;
        return (
            <Fragment>
                <Container className={classes2}>
                    <h1 className={"display-4"}>Graphical Interface of Knowledge Structure</h1>
                    <p className={"lead"}>GIKS is designed to caputre, visually represent, and compare the
                        "knowledge structure" inherent in a text, which can be used to identify individual learner's
                        knowledge gaps and/or misconceptions</p>

                </Container>
                <Container>
                    <CardDeck>

                        <Card>
                            <Link to="/management">
                                <CardImg top width="100%"
                                         src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                         alt="Card image cap"/>
                            </Link>
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This content is a little bit longer.</CardText>
                            </CardBody>

                        </Card>

                        <Card>
                            <CardImg top width="100%"
                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardText>This card has supporting text below as a natural lead-in to additional
                                    content.</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%"
                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This card has even longer content than the first to show that equal height
                                    action.</CardText>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </Container>
                <Footer/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Home, axios));