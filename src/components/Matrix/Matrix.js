import React, {Component, Fragment} from 'react';
import {Table, Container, Row, Col, CardDeck} from 'reactstrap';

import Cell from "./Cell/Cell";

// this class used to build up the table to visualize the table of distance
class Matrix extends Component {

    render() {
        return (
            <Table>
                <thead>

                </thead>
                <tbody>
                <tr>
                    <th>N/A</th>
                    <th>N1</th>
                    <th>N2</th>
                    <th>N3</th>
                    <th>N4</th>
                    <th>N5</th>
                    <th>N6</th>
                    <th>N7</th>
                    <th>N8</th>
                    <th>N9</th>
                    <th>N10</th>
                </tr>
                    <tr>
                        <th scope="row">N1</th>
                    </tr>
                    <tr>
                        <th scope="row">N2</th>
                    </tr>
                    <tr>
                        <th scope="row">N3</th>
                    </tr>
                    <tr>
                        <th scope="row">N4</th>
                    </tr>
                    <tr>
                        <th scope="row">N5</th>
                    </tr>
                    <tr>
                        <th scope="row">N6</th>
                    </tr>
                    <tr>
                        <th scope="row">N7</th>
                    </tr>
                    <tr>
                        <th scope="row">N8</th>
                    </tr>
                    <tr>
                        <th scope="row">N9</th>
                    </tr>
                    <tr>
                        <th scope="row">N10</th>
                    </tr>

                </tbody>
            </Table>
        );

        // const expCardList = Object.keys(this.props.experiments)
        //     .map(cardKey => {
        //         return (
        //             <Col xs="6" sm="3" md={"3"} key={this.props.experiments[cardKey]._id}>
        //                 <Expcard
        //                     title={this.props.experiments[cardKey].title}
        //                     subtitle={this.props.experiments[cardKey].subtitle}
        //                     cardcontent={this.props.experiments[cardKey].cardcontent}
        //                 />
        //             </Col>);
        //     });
        //
        // return (
        //     <Fragment>
        //         <CardDeck>
        //             <Col xs="6" sm="3" md={"3"}>
        //                 <Expcard title="New Experiment" key={-1}/>
        //             </Col>
        //             {expCardList}
        //         </CardDeck>
        //     </Fragment>
        // );
    }
}

export default Matrix;