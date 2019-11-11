import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// cytoscape experiment import
import cytoscape from 'cytoscape';
import {bindActionCreators} from 'redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';

import {updateObject} from "../../shared/utility";

// this css define the layout and size of the cy
import classes from "./Demo.css"
import Graph from "../../components/Graph/Graph";
import MatrixBuilder from "../MatrixBuilder/MatrixBuilder";
import "../../assets/rawdata/graph.json";
import GraphBuilder from "../GraphBuilder/GraphBuilder";

class Demo extends Component {
    constructor(props) {
        super(props);
    }

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