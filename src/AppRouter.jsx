import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import App from "./App";

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/app" component={App} />
        <Route path="/messages" component={App} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/login" />
      </Switch>
    );
  }
}

export default AppRouter;
