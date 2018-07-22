import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/UI/Navigation/Navigation";
import UserList from "./containers/UserList/UserList";
import HeroList from "./containers/HeroList/HeroList";
import ErrorNotifications from "./components/ErrorNotifications/ErrorNotifications";

const app = () => (
  <React.Fragment>
    <ErrorNotifications />
    <Navigation />
    <Switch>
      <Route path="/:id" exact component={HeroList} />
      <Route path="/" exact component={UserList} />
      <Route render={() => <h1>Page not found.</h1>} />
    </Switch>
  </React.Fragment>
);

export default app;
