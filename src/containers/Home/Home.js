import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container, CardDeck, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

import classes from './Home.css'

class Home extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {}

    componentDidMount() {
        // this.props.onInitIngredients();
    }


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

                <CardDeck>
                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional
                                content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%"
                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                 alt="Card image cap"/>
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional
                                content. This card has even longer content than the first to show that equal height
                                action.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        // ings: state.burgerBuilder.ingredients,
        // price: state.burgerBuilder.totalPrice,
        // error: state.burgerBuilder.error,
        // isAuthenticated: state.auth.token !== null
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