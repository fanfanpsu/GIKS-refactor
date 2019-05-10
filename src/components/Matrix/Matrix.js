import React, {Component, Fragment} from 'react';
import {Table, Container, Row, Col, CardDeck} from 'reactstrap';

import Cell from "./Cell/Cell";

// this class used to build up the table to visualize the table of distance
class Matrix extends Component {

    render() {
        return (
            <Table>
                <thead>
                <tr>
                    <th>DISTANCE</th>
                    <th>Node 1</th>
                    <th>Node 2</th>
                    <th>Node 3</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
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