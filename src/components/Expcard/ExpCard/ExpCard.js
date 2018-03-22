import React, {Component, Fragment} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import BurgerIngredient from "../../Burger/BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";


class ExpCard extends Component {

    render() {
        return (<Fragment>
            <Card>
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.cardcontent}</CardText>
                    <Button>Go</Button>
                </CardBody>
            </Card>
        </Fragment>)
    }
};

ExpCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ExpCard;