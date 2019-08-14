import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Provider } from 'react-redux'
// import store from './store';
// default styles
import './index.css';

// views
import Home from './views/home';
import About from './views/about';
import Projects from './views/projects';
import Contact from './views/contact';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSGSENDER_ID,
  appId: process.env.REACT_APP_ID
};
console.log('process env: ', process.env.REACT_APP_AUTHDOMAIN);

firebase.initializeApp(firebaseConfig);
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
