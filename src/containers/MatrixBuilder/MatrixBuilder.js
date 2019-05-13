import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import Expcards from "../../components/Expcard/ExpCards";
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
        experiments: [],
        distances:[]
    }

    componentDidMount() {
        // this.state.experiments = raw_experiments_fewer;
    }

    componentWillMount(){
        //TODO
        this.props.onManagementLoad(this.state.experiments);
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

        distances: state.managementBuilder.distances,
        // authRedirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onManagementLoad: () => dispatch(actions.initManagementExpPanels())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(MatrixBuilder, axios));