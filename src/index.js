import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App message="This is message sent from App"/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();