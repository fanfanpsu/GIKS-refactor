import React, {Component, Fragment} from 'react';
import {Card, CardColumns, CardDeck, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';

import Octicon, {Plus} from '@primer/octicons-react'

import Expcard from "./ExpCard/ExpCard";

class ExpCards extends Component {
    render() {
        const expCardList = Object.keys(this.props.experiments)
            .map(cardKey => {
                // console.log(cardKey);
                return (
                    <Expcard
                        key={this.props.experiments[cardKey]._id}
                        title={this.props.experiments[cardKey].title}
                        subtitle={this.props.experiments[cardKey].subtitle}
                        cardcontent={this.props.experiments[cardKey].cardcontent}
                    />
                );
            });

        return (
            <Fragment>
                <CardDeck >
                    <Card className={"Card"}>
                        <Card.Body>
                            <Card.Title>
                                <Link to="/experiment">
                                    {/*<Octicon icon={Plus} size='large' verticalAlign='middle' />*/}
                                </Link>
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    {expCardList}
                </CardDeck>
            </Fragment>
        );
    }
}

export default ExpCards;