import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";

const initialState = {
    matrixID: "matrixID",
    matrix:null,
    matrixColumnHeaders:[],
    matrixCellValues:{}
};

const initMatrix = ( state, action ) => {

    // let matrixColumnHeaders = Object.keys(this.props.cy.json().elements.nodes)
    //     this.props.cy.json().elements.nodes.map()
    // alert(state.graphReducer.nodes);
    console.log("action.nodes: " + JSON.stringify(action.nodes));
    //action.nodes: [{"data":{"id":"n1"}},{"data":{"id":"n2"}},{"data":{"id":"n3"}},{"data":{"id":"n4"}},{"data":{"id":"n5"}},{"data":{"id":"n6"}},{"data":{"id":"n7"}},{"data":{"id":"n8"}},{"data":{"id":"n9"}},{"data":{"id":"n10"}}]
    let headers = Object.values(action.nodes)
        .map( node => {
            // return [...Array( node["id"] )].map( ( _, i ) => {
            //     return <BurgerIngredient key={igKey + i} type={igKey} />;
            // } );
            return node.data.id;
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    const initState = {
        matrixColumnHeaders : headers
    }
    return updateObject( state, initState );
};

const updateMatrix = ( state, action ) => {

    const updatedState = {
        matrix: null
    }
    return updateObject( state, updatedState );
};

const matrixReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.UPDATE_MATRIX:
            return updateMatrix( state, action );
        case actionTypes.INIT_MATRIX:
            return initMatrix( state, action );
        default:
            return state;
    }
};

export default matrixReducer;