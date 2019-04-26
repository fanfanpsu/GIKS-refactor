import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


// this file could be useless and needs to be deleted

class ExpCard extends Component {

    render() {
        return (<Fragment>
            <Card >
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