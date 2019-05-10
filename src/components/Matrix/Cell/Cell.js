import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Cell extends Component {

    render() {
        return (<Fragment>
                <td>Mark</td>
            {/*<Card >*/}
            {/*    <CardBody>*/}
            {/*        <CardTitle>{this.props.title}</CardTitle>*/}
            {/*        <CardSubtitle>{this.props.subtitle}</CardSubtitle>*/}
            {/*        <CardText>{this.props.cardcontent}</CardText>*/}
            {/*        <Button>Go</Button>*/}
            {/*    </CardBody>*/}
            {/*</Card>*/}
        </Fragment>)
    }
};

Cell.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Cell;