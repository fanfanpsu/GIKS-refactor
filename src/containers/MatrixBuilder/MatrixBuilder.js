import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Matrix from "../../components/Matrix/Matrix";
import graph_config from '../../components/Graph/graph_config';

class MatrixBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        distances: []
    }

    componentDidMount() {
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
                    matrixRowValues = {this.props.matrixRowValues}>
                </Matrix>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        matrixRowValues: state.matrixReducer.matrixRowValues,
        matrixColumnHeaders: state.matrixReducer.matrixColumnHeaders,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        initMatrix : (nodes) => dispatch(actions.initMatrix(nodes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MatrixBuilder);