import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/UI/Navigation/Navigation";
import UserList from "./containers/UserList/UserList";
import HeroList from "./containers/HeroList/HeroList";

const app = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/heroes" component={HeroList} />
      <Route path="/" exact component={UserList} />
      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
);

export default app;
