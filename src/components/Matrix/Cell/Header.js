import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";
import graph_config from "../../Graph/graph_config";
import * as actions from "../../../store/actions";
import {connect} from "react-redux";

//
// class Cell extends Component {
//
//     render() {
//         // e.g if the cell value is significant, change background to pink, etc
//
//         return (<Fragment>
//             <td>{this.props.value}</td>
//             {/*<Card >*/}
//             {/*    <CardBody>*/}
//             {/*        <CardTitle>{this.props.title}</CardTitle>*/}
//             {/*        <CardSubtitle>{this.props.subtitle}</CardSubtitle>*/}
//             {/*        <CardText>{this.props.cardcontent}</CardText>*/}
//             {/*        <Button>Go</Button>*/}
//             {/*    </CardBody>*/}
//             {/*</Card>*/}
//         </Fragment>)
//     }
//
//     // const expCardList = Object.keys(this.props.experiments)
//     //     .map(cardKey => {
//     //         return (
//     //             <Col xs="6" sm="3" md={"3"} key={this.props.experiments[cardKey]._id}>
//     //                 <Expcard
//     //                     title={this.props.experiments[cardKey].title}
//     //                     subtitle={this.props.experiments[cardKey].subtitle}
//     //                     cardcontent={this.props.experiments[cardKey].cardcontent}
//     //                 />
//     //             </Col>);
//     //     });
//     //
//     // return (
//     //     <Fragment>
//     //         <CardDeck>
//     //             <Col xs="6" sm="3" md={"3"}>
//     //                 <Expcard title="New Experiment" key={-1}/>
//     //             </Col>
//     //             {expCardList}
//     //         </CardDeck>
//     //     </Fragment>
//     // );
// };
//
// // Cell.propTypes = {
// //     title: PropTypes.string.isRequired,
// // };

function Header({content, header,}) {
    const cellMarkup = header ? (
        <th>
            {content}
        </th>
    ) : (
        <td scope="row">
            {content}
        </td>
    );

    return (cellMarkup);
}

export default Header;
