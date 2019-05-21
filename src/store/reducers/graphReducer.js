import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
import cytoscape from 'cytoscape';
import {nodePairing} from "../../shared/algorithm"

const initialState = {
    graphID: "cytoscape",
    cy: cytoscape({ /* options */}),
    nodes: []
};

const init_cy = (state, action) => {

    let cytoscape_graph = cytoscape(updateObject(action.graph_config,
        {
            container: document.getElementById(action.graphID),
            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'height': 60,
                    'width': 60,
                    'background-fit': 'cover',
                    'border-color': '#000',
                    'border-width': 3,
                    'border-opacity': 0.5
                })
                .selector('.eating')
                .css({
                    'border-color': 'red'
                })
                .selector('edge')
                .css({
                    'opacity' : 0,
                    'line-color': '#ffaaaa',
                })
                .selector('#bird')
                .css({
                    'background-image': 'https://live.staticflickr.com/7272/7633179468_3e19e45a0c_b.jpg'
                })
                .selector('#cat')
                .css({
                    'background-image': 'https://live.staticflickr.com/1261/1413379559_412a540d29_b.jpg'
                })
                .selector('#ladybug')
                .css({
                    'background-image': 'https://live.staticflickr.com/3063/2751740612_af11fb090b_b.jpg'
                })
                .selector('#aphid')
                .css({
                    'background-image': 'https://live.staticflickr.com/8316/8003798443_32d01257c8_b.jpg'
                })
                .selector('#rose')
                .css({
                    'background-image': 'https://live.staticflickr.com/5109/5817854163_eaccd688f5_b.jpg'
                })
                .selector('#grasshopper')
                .css({
                    'background-image': 'https://live.staticflickr.com/6098/6224655456_f4c3c98589_b.jpg'
                })
                .selector('#plant')
                .css({
                    'background-image': 'https://live.staticflickr.com/3866/14420309584_78bf471658_b.jpg'
                })
                .selector('#wheat')
                .css({
                    'background-image': 'https://live.staticflickr.com/2660/3715569167_7e978e8319_b.jpg'
                }),
        }));

    cytoscape_graph.add(nodePairing(cytoscape_graph.json().elements.nodes));

    const updatedCy = {
        cy: cytoscape_graph,
    }
    return updateObject(state, updatedCy);
};


const graphReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INIT_CY:
            return init_cy(state, action);

        default:
            return state;
    }
};

export default graphReducer;