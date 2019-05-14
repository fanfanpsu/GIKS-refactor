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
import Matrix from "../MatrixBuilder/MatrixBuilder";
import "../../assets/rawdata/graph.json";
import GraphBuilder from "../Graph/GraphBuilder";

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
                    <Col xs="5" sm="5" md={"5"}>
                        <div className="node_selected">
                            <GraphBuilder> </GraphBuilder>
                        </div>
                    </Col>
                    <Col xs="5" sm="5" md={"5"}>
                        <div className="">
                            <Matrix></Matrix>
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