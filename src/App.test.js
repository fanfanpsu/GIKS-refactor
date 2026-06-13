import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import burgerBuilderReducer from './store/reducers/burgerReducer';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import managementReducer from './store/reducers/management';
import matrixReducer from './store/reducers/matrixReducer';
import graphReducer from './store/reducers/graphReducer';
import cellReducer from './store/reducers/cellReducer';
import experimentReducer from './store/reducers/experimentReducer';
import articleReducer from './store/reducers/articleReducer';

it('renders without crashing', () => {
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
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    div
  );
});
