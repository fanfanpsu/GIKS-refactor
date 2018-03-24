import React, {Component, Fragment} from 'react';
import {Container, Row, Col, CardDeck} from 'reactstrap';

import Expcard from "./ExpCard/ExpCard";

class ExpCards extends Component {
    render() {
        // console.log(this.props.expCards)
        const expCardList = Object.keys(this.props.experiments)
            .map(cardKey => {
                // console.log(cardKey);
                return (
                    <Col xs="6" sm="3" md={"3"} key={this.props.experiments[cardKey]._id}>
                        <Expcard
                            title={this.props.experiments[cardKey].title}
                            subtitle={this.props.experiments[cardKey].subtitle}
                            cardcontent={this.props.experiments[cardKey].cardcontent}
                        />
                    </Col>);
            });

        return (
            <Fragment>
                <CardDeck>
                    <Col xs="6" sm="3" md={"3"}>
                        <Expcard title="New Experiment" key={-1}/>
                    </Col>
                    {expCardList}
                </CardDeck>
            </Fragment>
        );
    }
}

export default ExpCards;