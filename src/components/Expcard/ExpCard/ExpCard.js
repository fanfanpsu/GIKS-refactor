import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import {Card, Button} from "react-bootstrap";
import classes from "./ExpCard.css"


class ExpCard extends Component {

    render() {
        return (<Fragment>
            <Card className={"Card"}>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
                    <Card.Text>{this.props.cardcontent}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button>Go</Button>
                </Card.Footer>
            </Card>
        </Fragment>)
    }
};

ExpCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ExpCard;

