import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import tomato from "./tomato";

export default ({match}) => (
  <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/sellCrop`} />
      <Route path={`${match.url}/tomato`} component={tomato} />
      <Redirect to="/error" />
  </Switch>
);
