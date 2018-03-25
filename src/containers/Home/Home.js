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
import researcher_logo from '../../assets/images/researcher.png'; // Import using relative path
import student_logo from '../../assets/images/student.png'; // Import using relative path
import demo_logo from '../../assets/images/demo.png'; // Import using relative path

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
                <Container>
                    <CardDeck>
                        <Card>
                            <div style={{backgroundColor: "#ADD475"}}>
                                <img width={"256px"} height={"180px"} alt="Card image cap" src={researcher_logo}/>
                            </div>

                            <CardBody>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to
                                    additional
                                    content. This content is a little bit longer.</CardText>

                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%"
                                     style={{backgroundColor: "#EC6687"}}
                                     src={student_logo}
                                     alt="Card image cap"/>
                            <CardBody>
                                <CardText>This card has supporting text below as a natural lead-in to additional
                                    content.</CardText>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg top width="100%"
                                     style={{backgroundColor: "#FBC05E"}}
                                     src={demo_logo}
                                // src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
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
                <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">

                <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Cool stuff</a></li>
                <li><a class="text-muted" href="#">Random feature</a></li>
                <li><a class="text-muted" href="#">Team feature</a></li>
                <li><a class="text-muted" href="#">Stuff for developers</a></li>
                <li><a class="text-muted" href="#">Another one</a></li>
                <li><a class="text-muted" href="#">Last time</a></li>
                </ul>
                </div>
                <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Resource</a></li>
                <li><a class="text-muted" href="#">Resource name</a></li>
                <li><a class="text-muted" href="#">Another resource</a></li>
                <li><a class="text-muted" href="#">Final resource</a></li>
                </ul>
                </div>
                <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Team</a></li>
                <li><a class="text-muted" href="#">Locations</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
                </ul>
                </div>
                </div>
                </footer>

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