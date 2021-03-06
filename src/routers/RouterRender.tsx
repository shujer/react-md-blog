import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { RouteConfig } from "./type";

export const RouterRender: React.FC<{ routes: RouteConfig[] }> = ({
  routes,
}) => (
  <Router>
    {routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    ))}
  </Router>
);
