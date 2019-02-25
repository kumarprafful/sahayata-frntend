import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import map from "./map"

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/second-menu`} />


        <Route path={`${match.url}/all`} component={map} />
        <Route path={`${match.url}/warehouse`} component={map} />
        <Route path={`${match.url}/mandi`} component={map} />
        <Route path={`${match.url}/transport`} component={map} />
        <Redirect to="/error" />

    </Switch>
);
