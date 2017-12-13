import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import Application from './views/Application';

function render() {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Application />
                </ConnectedRouter>
            </Provider>
        </AppContainer>
    )
}

render();
if (module.hot) {
	module.hot.accept('./views/Application.js', render);
}