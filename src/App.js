import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/UI/Navigation/Navigation";
import UserList from "./containers/UserList/UserList";
import HeroList from "./containers/HeroList/HeroList";
import ErrorNotifications from "./components/ErrorNotifications/ErrorNotifications";

const app = () => (
  <div>
    <ErrorNotifications />
    <Navigation />
    <Switch>
      <Route path="/heroes" exact component={HeroList} />
      <Route path="/" exact component={UserList} />
      <Route render={() => <h1>Page not found.</h1>} />
    </Switch>
  </div>
);

export default app;
