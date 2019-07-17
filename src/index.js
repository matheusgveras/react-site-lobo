import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/home/';
import Contato from './views/contato/';
import Proposta from './views/proposta/';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/contato" exact={true} component={Contato} />
            <Route path="/Proposta" exact={true} component={Proposta} />
        </Switch>
</BrowserRouter>,
document.getElementById('root'));
serviceWorker.unregister();
