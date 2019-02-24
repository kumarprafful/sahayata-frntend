import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import all from './all';
import warehouse from './warehouse';
import mandi from './mandi';
import transport from './transport';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/second`} />
        <Route path={`${match.url}/all`} component={all} />
        <Route path={`${match.url}/warehouse`} component={warehouse} />
        <Route path={`${match.url}/mandi`} component={mandi} />
        <Route path={`${match.url}/transport`} component={transport} />
        <Redirect to="/error" />
    </Switch>
);
