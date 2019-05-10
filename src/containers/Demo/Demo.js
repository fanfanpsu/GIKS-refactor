import React, {Component, Fragment} from 'react';
import {Col, Row} from 'reactstrap';
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
import Graph from "../../components/Graph/Graph";

class Demo extends Component {
    constructor(props){
        super(props);
        this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    }
    // code sample from https://stackoverflow.com/questions/38626167/cytoscape-and-reactjs-integration
    renderCytoscapeElement(){
        //https://github.com/cytoscape/cytoscape.js/issues/2380
        let cy1 = cytoscape(
            {
                container: document.getElementById('cy1'),

                boxSelectionEnabled: false,
                autounselectify: true,

                style: cytoscape.stylesheet()
                    .selector('node')
                    .css({
                        'height': 10,
                        'width': 10,
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
                        // { data: { source: 'cat', target: 'bird' } },
                        // { data: { source: 'bird', target: 'ladybug' } },
                        // { data: { source: 'bird', target: 'grasshopper' } },
                        // { data: { source: 'grasshopper', target: 'plant' } },
                        // { data: { source: 'grasshopper', target: 'wheat' } },
                        // { data: { source: 'ladybug', target: 'aphid' } },
                        // { data: { source: 'aphid', target: 'rose' } }
                    ]
                },

                layout: {
                    name: 'grid',
                    directed: true,
                    padding: 10
                },

                // interaction options:
                minZoom: 1e-50,
                maxZoom: 1e50,
                zoomingEnabled: false,
                userZoomingEnabled: true,
                panningEnabled: true,
                userPanningEnabled: true,
                selectionType: 'single',
                touchTapThreshold: 8,
                desktopTapThreshold: 4,
                autolock: false,
                autoungrabify: false,

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


        cy1.on('dragfree',  'node', (evt) => {
            alert('DragFree Event');

        });

    }

    state = {}



    componentDidMount() {
        this.renderCytoscapeElement();
    }

    componentWillMount(){

    }

    render() {

        // this.state.tasks.forEach ((t) => {
        //     tasks[t.category].push(<div
        //         key={t.name}
        //         onDragStart={(e)=>this.onDragStart(e, t.name)}
        //         draggable
        //         className="draggable"
        //         style={{backgroundColor: t.bgcolor}}>
        //         {t.name}
        //     </div>);

            return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    <Col xs="5" sm="5" md={"5"}>
                        <div className="node_selected">
                            <div id="cy1" className={"graph"}/>
                        </div>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onManagementLoad: () => dispatch(actions.initManagementExpPanels())
        // onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Demo, axios));