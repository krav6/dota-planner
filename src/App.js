import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/UI/Navigation/Navigation";

const app = () => (
  <div>
    <Navigation />
    <Switch>
      <Route
        render={() => (
            <h1>Page not found</h1>
        )}
      />
    </Switch>
  </div>
);

export default app;
