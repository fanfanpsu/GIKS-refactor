import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerReducer';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import managementReducer from './store/reducers/management';
import matrixReducer from './store/reducers/matrixReducer';
import graphReducer from './store/reducers/graphReducer';
import cellReducer from "./store/reducers/cellReducer";
import experimentReducer from "./store/reducers/experimentReducer";
import articleReducer from "./store/reducers/articleReducer"

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers = compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer,
    managementBuilder: managementReducer,
    matrixReducer: matrixReducer,
    graphReducer: graphReducer,
    cellReducer: cellReducer,
    experimentReducer: experimentReducer,
    articleReducer: articleReducer

});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

// TODO: This <BrowserRouter> should be inside app or not?
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();