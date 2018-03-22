import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'reactstrap';

import Expcard from "./ExpCard/ExpCard";

class ExpCards extends Component {
    render() {
        // console.log(this.props.expCards)
        const expCardList = Object.keys(this.props.expCards)
            .map(cardKey => {
                // console.log(cardKey);
                return (
                    <Col xs="6" sm="3" md={"3"} key={cardKey}>
                        <Expcard title={this.props.expCards[cardKey].title}/>
                    </Col>);
            });

        return (
            <Fragment>
                <Col xs="6" sm="3" md={"3"}>
                    <Expcard title="New Experiment" key={-1}/>
                </Col>
                {expCardList}
            </Fragment>
        );
    }
}

export default ExpCards;