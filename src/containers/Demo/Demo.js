import React, {Component, Fragment} from 'react';
import {Row} from 'reactstrap';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

// cytoscape experiment import
import cytoscape from 'cytoscape';
import { bindActionCreators } from 'redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

import {updateObject} from "../../shared/utility";

// this css define the layout and size of the cy
import classes from "./Demo.css"

class Demo extends Component {
    constructor(props){
        super(props);
        this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    }
    // code sample from https://stackoverflow.com/questions/38626167/cytoscape-and-reactjs-integration
    renderCytoscapeElement(){

        console.log('* Cytoscape.js is rendering the graph..');

        this.cy = cytoscape(
            {
                container: document.getElementById('cy'),

                boxSelectionEnabled: false,
                autounselectify: true,

                style: cytoscape.stylesheet()
                    .selector('node')
                    .css({
                        'height': 80,
                        'width': 80,
                        'background-fit': 'cover',
                        'border-color': '#000',
                        'border-width': 3,
                        'border-opacity': 0.5,
                        'content': 'data(name)',
                        'text-valign': 'center',
                    })
                    .selector('edge')
                    .css({
                        'width': 6,
                        'target-arrow-shape': 'triangle',
                        'line-color': '#ffaaaa',
                        'target-arrow-color': '#ffaaaa',
                        'curve-style': 'bezier'
                    })
                ,
                elements: {
                    nodes: [
                        { data: { id: 'cat' } },
                        { data: { id: 'bird' } },
                        { data: { id: 'ladybug' } },
                        { data: { id: 'aphid' } },
                        { data: { id: 'rose' } },
                        { data: { id: 'grasshopper' } },
                        { data: { id: 'plant' } },
                        { data: { id: 'wheat' } }
                    ],
                    edges: [
                        { data: { source: 'cat', target: 'bird' } },
                        { data: { source: 'bird', target: 'ladybug' } },
                        { data: { source: 'bird', target: 'grasshopper' } },
                        { data: { source: 'grasshopper', target: 'plant' } },
                        { data: { source: 'grasshopper', target: 'wheat' } },
                        { data: { source: 'ladybug', target: 'aphid' } },
                        { data: { source: 'aphid', target: 'rose' } }
                    ]
                },

                layout: {
                    name: 'breadthfirst',
                    directed: true,
                    padding: 10
                }
            });
    }

    state = {}



    componentDidMount() {
    }

    componentWillMount(){
        // this.props.onManagementLoad(this.state.experiments);
    }

    render() {

        return (
            <Fragment>
                <Row>

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