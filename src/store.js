import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

// Set up the redux store, including the react router middleware
export const history = createHistory();
const routingMiddleware = routerMiddleware(history);
const composer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const store = createStore(
	reducer,
	{},
	composer(applyMiddleware(routingMiddleware))
);

export default store;