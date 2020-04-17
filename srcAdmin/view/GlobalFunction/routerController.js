import React from 'react';
import { Route } from 'react-router-dom';

export default function routerController(routes) {
  return routes.map((prop) => (
    <Route
      exact
      path={prop.path}
      component={prop.component}
      key={prop.path}
    />
  ));
}
