import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Matrix from "../../components/Matrix/Matrix";

// this css aligns the layout of all cards with same height
import classes from "./MatrixBuilder.css"

import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer.js';
import {updateObject} from "../../shared/utility";

class MatrixBuilder extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {
        distances:[]
    }

    componentDidMount() {
        // this.state.experiments = raw_experiments_fewer;
    }

    componentWillMount(){
        //TODO
        // this.props.onManagementLoad(this.state.experiments);
    }

    componentDidUpdate() {
        //alert("graph updated, therefore matrix needs to be updated too");
        // const {filter, hiddenElements} = this.props.store;
        // if(filter) {
        //     if(hiddenElements) {
        //         hiddenElements.restore();
        //         this.props.store.clearHiddenElements();
        //     }
        //
        //     let node = this.cy.getElementById(filter);
        //     let neighbours = node.neighborhood();
        //     // Hide farest elements
        //     this.props.store.setHiddenElements(self.cy.elements().difference(neighbours).not(node));
        //     this.cy.nodes().difference(neighbours).not(node).remove();
        //     node.select();
        // }
        // else if(hiddenElements) {
        //     hiddenElements.restore();
        //     this.props.store.clearHiddenElements();
        // }
        //
        // this.cy.fit();
    }

    render() {
        return (
            <Fragment>
                <Matrix distances={this.props.distances}/>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        distances: state.matrixReducer.distances,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // the matrix shouldn't be updated, it should be updated by the graph
        // onManagementLoad: () => dispatch(actions.initManagementExpPanels()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MatrixBuilder, axios));