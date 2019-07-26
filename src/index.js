import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store';
import './index.css';
import Home from './views/home/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <Home/>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
