import React from 'react';
import {render} from 'react-dom';
import App from './App.react';
import {createStore} from 'redux';
import rootReducer from './rootReducer.reducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// todo create redux dev tool only for development
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('app'));