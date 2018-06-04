import React, {Component, Fragment} from 'react';
import {Container, Row, Col, CardDeck} from 'reactstrap';

import Expcard from "./ExpCard/ExpCard";

class ExpCards extends Component {
    render() {
        return (
            <Fragment>
                <CardDeck>
                    <Col xs="6" sm="3" md={"3"}>
                        <Expcard title="New Experiment" key={-1}/>
                    </Col>
                </CardDeck>
            </Fragment>
        );
    }
}

export default ExpCards;