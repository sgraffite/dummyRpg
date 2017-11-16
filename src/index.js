import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import {createStore, combineReducers} from 'redux';
import CharacterReducer from './reducers/characterReducer';
/*
const store = createStore(
    combineReducers({
        characters: CharacterReducer
    })
);*/

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
