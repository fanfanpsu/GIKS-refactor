import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-address';
import Expcards from "../../components/Expcard/ExpCards";

import "./management.css"

class Management extends Component {

    componentDidMount() {
        // this.state.experiments = raw_experiments_fewer;
    }

    componentWillMount(){
        this.props.onManagementLoad();
    }

    render() {
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
        onManagementLoad: () => dispatch(actions.loadUserExperiments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Management, axios));