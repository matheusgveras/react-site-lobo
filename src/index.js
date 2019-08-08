import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import { Provider } from 'react-redux'
//import store from './store';
// default styles
import './index.css';

// views
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
import Contact from './views/contact';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    {/* <Provider store={store}> */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    {/* </Provider> */}
  </Router>,
  document.getElementById('root'));
serviceWorker.unregister();
