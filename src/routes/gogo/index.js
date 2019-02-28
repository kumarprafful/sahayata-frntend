import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import start from './start';
import HomeStorage from './start/farmerView/homeStorage';
import Grains from './start/farmerView/grains';
import FVegies from './start/farmerView/fVegies';


export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/start`} />
        <Route path={`${match.url}/start`} component={start} />
        <Route path={`${match.url}/home-storage`} component={HomeStorage} />
        <Route path={`${match.url}/grains`} component={Grains} />
        <Route path={`${match.url}/fruits-vegetables`} component={FVegies} />

        <Redirect to="/error" />
    </Switch>
);
