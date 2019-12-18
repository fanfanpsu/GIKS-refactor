import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {updateObject} from "../../shared/utility";

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Expcards from "../../components/Expcard/ExpCards";

// this css aligns the layout of all cards with same height
import classes from "./management.css"
import raw_experiments_fewer from '../../assets/rawdata/rawdata_fewer.js';

class Management extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    componentDidMount() {
        // this.state.experiments = raw_experiments_fewer;
    }

    componentWillMount(){
        this.props.onManagementLoad();
    }

    render() {

        let authRedirect = null;
        if (!this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }

        return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    <Expcards experiments={this.props.experiments}/>
                </Row>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        experiments: state.managementBuilder.experiments,
        authRedirectPath: state.auth.authRedirectPath
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onManagementLoad: () => dispatch(actions.initManagementExpPanels())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Management, axios));