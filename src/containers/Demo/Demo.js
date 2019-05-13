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
import axios from '../../axios-orders';

import {updateObject} from "../../shared/utility";

// this css define the layout and size of the cy
import classes from "./Demo.css"
import Graph from "../../components/Graph/Graph";
import Matrix from "../MatrixBuilder/MatrixBuilder";
import "../../assets/rawdata/graph.json";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.renderCytoscapeElement = this.renderCytoscapeElement.bind(this);
    }

    // code sample from https://stackoverflow.com/questions/38626167/cytoscape-and-reactjs-integration
    renderCytoscapeElement() {

        //https://github.com/cytoscape/cytoscape.js/issues/2380
        /*let cy1 = cytoscape(
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
                        {data: {id: 'cat'}},
                        {data: {id: 'bird'}},
                        {data: {id: 'ladybug'}},
                        {data: {id: 'aphid'}},
                        {data: {id: 'rose'}},
                        {data: {id: 'grasshopper'}},
                        {data: {id: 'plant'}},
                        {data: {id: 'wheat'}}
                    ],
                    edges: []
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
            });*/


        /*cy1.on('dragfree', 'node', (evt) => {
            alert('DragFree Event');

        });*/

    }

    state = {}


    componentDidMount() {
        // this.renderCytoscapeElement();

        // const mount_node = document.getElementById('cy-node');
        // const data_source_node = document.getElementById('data-source-link');
        //
        // const filter_node = document.getElementById('graph-nodes');
        // ReactDOM.render(
        //     <Graph graphID={"cy-node"}></Graph>,
        //     mount_node
        // );

        // axios.get(data_source_node.getAttribute('href'))
        //     .then(function (response) {
        //
        //         const store = response.data; //new GraphModel(response.data);
        //
        //         const filter_node = document.getElementById('graph-nodes');
        //
        //         // ReactDOM.render(
        //         //     <Filter store={store}></Filter>,
        //         //     filter_node
        //         // );
        //
        //         ReactDOM.render(
        //             <Graph store={store}></Graph>,
        //             mount_node
        //         );
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         ReactDOM.render(
        //             <div className="alert alert-danger">
        //                 <strong>:(</strong>
        //                 <br/>
        //                 <span>No data</span>
        //             </div>,
        //             mount_node
        //         );
        //     });
    }

    componentWillMount() {

    }

    render() {

        return (
            <Fragment>
                <Row className={"row-eq-height"}>
                    <Col xs="5" sm="5" md={"5"}>
                        <div className="node_selected">
                            {/*<div id="cy1" className={"graph"}/>*/}
                            <Graph graphID={"test graphID"}>

                            </Graph>
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