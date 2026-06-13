import React, {Component, Fragment} from 'react';
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-address';

// this css define the layout and size of the cy
import "./Demo.css"
import MatrixBuilder from "../MatrixBuilder/MatrixBuilder";
import "../../assets/rawdata/graph.json";
import GraphBuilder from "../GraphBuilder/GraphBuilder";

class Demo extends Component {

    state = {}

    componentDidMount() {
    }

    componentWillMount() {

    }

    render() {
        return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    <Col xs="1" sm="1" md={"1"}>
                    </Col>
                    <Col xs="4" sm="4" md={"4"}>
                        <div className="node_selected">
                            <GraphBuilder> </GraphBuilder>
                        </div>
                    </Col>
                    <Col xs="6" sm="6" md={"6"}>
                        <div className="">
                            <MatrixBuilder></MatrixBuilder>
                        </div>
                    </Col>

                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {
        // onManagementLoad: () => dispatch(actions.initManagementExpPanels())
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Demo, axios));