import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contactenos from './components/home/contactenos';
import App from './App';

const routes = (
    <Switch>
            <Route exact path="/" component={App} />
            <Route path="/contactenos" component={Contactenos} />
    </Switch>
);

export default routes;