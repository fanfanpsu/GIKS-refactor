import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import cytoscape from 'cytoscape';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';
import Expcards from "../../components/Expcard/ExpCards";

// this css aligns the layout of all cards with same height
import classes from "./Demo.css"

import {updateObject} from "../../shared/utility";

class Demo extends Component {
    constructor(props) {
        super(props);
        // this.state = {...};
    }

    state = {}



    componentDidMount() {
    }

    componentWillMount(){
        // this.props.onManagementLoad(this.state.experiments);
    }

    render() {

        var cy = cytoscape({
            // very commonly used options
            container: undefined,
            elements: [ /* ... */ ],
            style: [ /* ... */ ],
            layout: { name: 'grid' /* , ... */ },

            // initial viewport state:
            zoom: 1,
            pan: { x: 0, y: 0 },

            // interaction options:
            minZoom: 1e-50,
            maxZoom: 1e50,
            zoomingEnabled: true,
            userZoomingEnabled: true,
            panningEnabled: true,
            userPanningEnabled: true,
            boxSelectionEnabled: false,
            selectionType: 'single',
            touchTapThreshold: 8,
            desktopTapThreshold: 4,
            autolock: false,
            autoungrabify: false,
            autounselectify: false,

            // rendering options:
            headless: false,
            styleEnabled: true,
            hideEdgesOnViewport: false,
            hideLabelsOnViewport: false,
            textureOnViewport: false,
            motionBlur: false,
            motionBlurOpacity: 0.2,
            wheelSensitivity: 1,
            pixelRatio: 'auto'
        });

        return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    {/*<Expcards experiments={this.props.experiments}/>*/}
                </Row>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // username : state.nav.username
        // internal : external
        experiments: state.managementBuilder.experiments,
        authRedirectPath: state.auth.authRedirectPath
        // isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onManagementLoad: () => dispatch(actions.initManagementExpPanels())
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        // onInitIngredients: () => dispatch(actions.initIngredients()),
        // onInitPurchase: () => dispatch(actions.purchaseInit()),
        // onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Demo, axios));