import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Matrix from "../../components/Matrix/Matrix";
import graph_config from '../../components/Graph/graph_config';
// this css aligns the layout of all cards with same height
import classes from "./MatrixBuilder.css"

import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer.js';
import {updateObject} from "../../shared/utility";
import * as actionTypes from "../../store/actions/actionTypes";

class MatrixBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        distances: []
    }

    componentDidMount() {
        // this.props.initMatrix();
        this.props.initMatrix(graph_config.elements.nodes);
    }

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <Fragment>
                <Matrix
                    matrixColumnHeaders = {this.props.matrixColumnHeaders}
                    matrixCellValues = {this.props.matrixCellValues}>
                </Matrix>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        matrixCellValues: state.matrixReducer.matrixCellValues,
        matrixColumnHeaders: state.matrixReducer.matrixColumnHeaders,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onMatrixUpdated: () => dispatch(actions.updateMatrix()),
        initMatrix : (nodes) => dispatch(actions.initMatrix(nodes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatrixBuilder);